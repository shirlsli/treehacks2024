import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text, Input } from "tamagui";
import Logo from "../components/logo.component";
import SearchBar from "../components/searchbar.component";
import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";

const Welcome = ({ navigation, user }) => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, showErrorMessage] = useState(false);

  const saveMedication = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    if (userData.password !== userData.confirmPassword) {
      showErrorMessage(true);
    } else {
      showErrorMessage(false);
    }
    console.log(userData);
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
      <SearchBar user={user} />
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
  labelContainer: {
    alignItems: "flex-start",
  },
  questionLabel: {
    textAlign: "left",
    marginBottom: 5,
    marginTop: 30,
    fontFamily: "Sora_600SemiBold",
    fontSize: "16px",
    color: "#556B2F",
  },
  label: {
    textAlign: "left",
    marginBottom: 5,
    marginTop: 5,
    fontFamily: "Sora_400Regular",
    fontSize: "48px",
    color: "#556B2F",
  },
  logoText: {
    textAlign: "left",
    marginBottom: 5,
    marginTop: 5,
    fontFamily: "Sora_600SemiBold",
    fontSize: "48px",
    color: "#556B2F",
  },
  buttonText: {
    fontFamily: "Sora",
    fontFamily: "Sora_500Medium",
    fontSize: "16px",
    color: "#FBF6F1",
  },
  button: {
    backgroundColor: "#B0C38F",
    padding: 10,
    borderRadius: 7,
    margin: 10,
    width: 108,
    height: 41,
    textAlign: "center",
    fontFamily: "Inter",
    marginTop: 20,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  inputBox: {
    width: "272px",
    height: "29px",
    background: "#FBF6F1",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px",
    marginBottom: 20,
  },
});
