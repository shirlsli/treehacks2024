import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, Input } from "tamagui";
import { Chip } from "react-native-paper";

import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";

const Box = ({ title, desc, userData, flaggedIngr }) => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titleLabel}>{title}</Text>
      {/* {user.medication.map((med) => {
        <RemovableChips label={med} onChangeChips={(chips) => console.log(chips)} alertRequired={true}/>
    })} */}
      <Chip
        mode="outlined"
        style={styles.chip}
        onPress={() => console.log("Pressed")}
      >
        {userData["medication"]}
      </Chip>
      <Text style={styles.label}>{desc}</Text>
      <Text style={styles.label}>Flagged Ingredient(s):</Text>
      {flaggedIngr.map((ingr) => {
        <RemovableChips
          label={ingr}
          onChangeChips={(chips) => console.log(chips)}
          alertRequired={true}
        />;
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
    border: "3px solid #B0C38F",
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
  chip: {
    width: "fit-content",
    marginLeft: 20,
  }
});
