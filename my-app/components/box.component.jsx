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
  const [medicationDesc, setMedicationDesc] = useState(["Tylenol is used for fever"]);

  useEffect(() => {
    if (flaggedIngr.length > 0) {
      setChipColor("#FED2C0"); // red
      setChipBorderColor("#B3572F");
    } else {
      setChipBorderColor("#B0C38F"); // green
    }
    console.log(userData);
  });

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
            <Text style={styles.descLabel}>
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
          <Chip
            mode="flat"
            style={[styles.chip, { backgroundColor: chipColor, marginBottom: (index == flaggedIngr.length - 1) ?  20 : 10 }]}
            onPress={() => console.log("Pressed")}
            selectedColor={chipColor}
            textStyle={{ color: "#000000" }}
          >
            {ingr}
          </Chip>
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
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 20,
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
