import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text, Input } from "tamagui";
import Logo from '../components/logo.component';
import {
    useFonts,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
} from '@expo-google-fonts/sora';

const Signup = ({ navigation }) => {
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

  const handleSignup = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    if (userData.password !== userData.confirmPassword) {
        showErrorMessage(true);
    } else {
        // create new user
        // go to welcome screen
        showErrorMessage(false);
        navigation.navigate('Welcome');
    }
    console.log(userData);
  };

  return (
    <View style={styles.container}>
        <Logo fontFamily={"Sora_500Medium"} fontSize={32} imageSize={30} color={false} />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>full name</Text>
        <Input
          size="$3"
          style={styles.inputBox}
          borderWidth={2}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>email</Text>
        <Input
          size="$3"
          style={styles.inputBox}
          borderWidth={2}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>password</Text>
        <Input
          size="$3"
          style={styles.inputBox}
          borderWidth={2}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.label}>confirm password</Text>
        <Input
          size="$3"
          style={styles.inputBox}
          borderWidth={2}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <Button
        style={styles.button}
        onClick={handleSignup}
      >
        <Text style={styles.buttonText}>next</Text>
      </Button>
      <Text style={styles.label} display={errorMessage ? "contents" : "none"}>please re-enter your password</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B0C38F",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  labelContainer: {
    alignItems: "flex-start",
    marginTop: 20
  },
  label: {
    textAlign: "left",
    marginBottom: 5,
    marginTop: 5,
    fontFamily: "Sora_500Medium",
    fontSize: "16px",
    color: "#FBF6F1",
  },
  buttonText: {
    fontFamily: "Sora",
    fontFamily: "Sora_500Medium",
    fontSize: "16px",
    color: "#556B2F",
  },
  button: {
    backgroundColor: "#FBF6F1",
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
