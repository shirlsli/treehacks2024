import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text, Input } from "tamagui";
import Logo from "../components/logo.component";
import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";

const Welcome = ({ route, navigation }) => {

  const { userData } = route.params;
  const [medication, setMedication] = useState(""); 
  
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  const addMedication = () => {
    userData.medication.push(medication);
    setMedication(""); 
  }

  const saveMedication = () => {
    if (medication !== "") {
      userData.medication.push(medication);
    }
    navigation.navigate('Home', { userData: userData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome to </Text>
      <Logo
        fontFamily={"Sora_600SemiBold"}
        fontSize={48}
        imageSize={48}
        color={true}
      />
      <Text style={styles.questionLabel}>What medication are you taking?</Text>
      <Input
        size="$3"
        style={styles.inputBox}
        borderWidth={2}
        value={medication}
        onChangeText={(text) => setMedication(text)}
        onSubmitEditing={addMedication}
      />
      <Button style={styles.button} onClick={saveMedication}>
        <Text style={styles.buttonText}>submit</Text>
      </Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBF6F1",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  label: {
    textalign: "left",
    marginBottom: 5,
    marginTop: 5,
    fontFamily: "Sora_400Regular",
    fontSize: 48,
    color: "#556B2F",
  },
  questionLabel: {
    textalign: "left",
    marginBottom: 5,
    marginTop: 30,
    fontFamily: "Sora_600SemiBold",
    fontSize: 16,
    color: "#556B2F",
  },
  buttonText: {
    fontFamily: "Sora_500Medium",
    fontSize: 16,
    color: "#FBF6F1",
  },
  button: {
    backgroundColor: "#B0C38F",
    padding: 10,
    borderRadius: 7,
    margin: 10,
    width: 108,
    height: 41,
    textalign: "center",
    marginTop: 10,
  },
  inputBox: {
    width: 272,
    height: 29,
    backgroundColor: "#FBF6F1",
    borderRadius: 7,
    marginBottom: 20,
  },
});