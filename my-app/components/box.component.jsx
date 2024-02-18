import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, Input } from "tamagui";
import { Chip } from "react-native-paper";

import {
  useFonts,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";

const Box = ({ title, desc, userData, flaggedIngr }) => {
  let [fontsLoaded] = useFonts({
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  const [input, setInput] = useState("");
  const [chipColor, setChipColor] = useState("#B0C38F");
  const [chipBorderColor, setChipBorderColor] = useState("#FFFDF9");
  const [medicationDesc, setMedicationDesc] = useState([]);
  const [foodDesc, setFoodDesc] = useState([]);
  const medicationsData = require('../database/food-drug-interaction.json');

  useEffect(() => {
    let medsDesc = [];
    let foodsDesc = [];
    userData.medication.map((med) => {
      medsDesc.push(getDescriptionByName(med));
      foodsDesc.push(getFoodDescriptionByName(med));
    })
    setMedicationDesc(medsDesc);
    setFoodDesc(foodsDesc);
    if (flaggedIngr.length > 0) {
      setChipColor("#FED2C0"); // red
      setChipBorderColor("#B3572F");
    } else {
      setChipBorderColor("#B0C38F"); // green
    }
  }, [userData]);

  function getDescriptionByName(name) {
    const medication = medicationsData.medications.find(med => med.name === name);
    return medication ? medication.description : "Description not found";
  }

  function getFoodDescriptionByName(name) {
    const medication = medicationsData.medications.find(med => med.name === name);
    return medication ? medication.food_interaction_summary : "Description not found";
  }

  return (
    <View
      style={[
        styles.container,
        { borderWidth: 3, borderColor: chipBorderColor },
      ]}
    >
      <Text style={styles.titleLabel}>{title}</Text>
        {userData.medication.map((med, index) => {
          return (
            <View>
              <Chip
              mode="outlined"
              style={styles.chip}
              onPress={() => console.log("Pressed")}
              selectedColor={"#556B2F"}
              textStyle={{ color: "#000000" }}
            >
              {med}
            </Chip>
            <Text style={[styles.descLabel, {marginBottom: (index == flaggedIngr.length - 1) ?  20 : 10}]}>
                {medicationDesc[index]}
            </Text>
              </View>
            
          );
        })}
      <Text style={styles.label}>{desc}</Text>
      <Text
        display={flaggedIngr.length > 0 ? "flex" : "none"}
        style={styles.label}
      >
        Flagged Ingredient(s):
      </Text>
      {flaggedIngr.map((ingr, index) => {
        return (
          <View>
          <Chip
            mode="flat"
            style={[styles.chip, { backgroundColor: chipColor }]}
            onPress={() => console.log("Pressed")}
            selectedColor={chipColor}
            textStyle={{ color: "#000000" }}
          >
            {ingr}
          </Chip>
          <Text style={[styles.descLabel, {marginBottom: (index == flaggedIngr.length - 1) ?  20 : 10}]}>
            {foodDesc[index]}
          </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDF9",
    // alignItems: "center",
    justifyContent: "center",
    width: "315px",
    borderRadius: "10px",
  },
  titleLabel: {
    textalign: "left",
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: "Sora_500Medium",
    fontSize: "16px",
    color: "#000000",
  },
  label: {
    textalign: "left",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 20,
    fontFamily: "Sora_400Regular",
    fontSize: "14px",
    color: "#000000",
  },
  descLabel: {
    textalign: "left",
    marginTop: 5,
    marginLeft: 20,
    marginHorizontal: 5,
    fontFamily: "Sora_300Light",
    fontSize: "12px",
    color: "#000000",
  },
  chip: {
    width: "fit-content",
    marginLeft: 20,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    marginLeft: "5px",
    marginTop: "3px",
  },
});
