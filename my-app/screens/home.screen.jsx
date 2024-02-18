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
import Box from "../components/box.component";

const HomeScreen = ({ route, navigation }) => {

  const { userData } = route.params;
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("Medication");
  const [desc, setDesc] = useState("");
  const [flaggedIngr, setFlaggedIngr] = useState([]);

  useEffect(() => {
    // if warning, safe, etc. change title, change desc, add flagged ingr

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Summary</Text>
      <View style={styles.containerInner}>
        <Box title={title} desc={desc} userData={userData} flaggedIngr={flaggedIngr} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBF6F1",
    height: "100%",
  },
  containerInner: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    textalign: "left",
    color: "#556B2F",
    fontFamily: "Sora_500Medium",
    fontSize: "24px",
    marginLeft: "30px",
    marginTop: "50px",
    marginBottom: "20px"
  },
  button: {
    backgroundColor: "#FBF6F1",
    padding: 10,
    borderRadius: 7,
    margin: 10,
    width: 108,
    height: 41,
  },
  inputBox: {
    width: "272px",
    height: "29px",
    backgroundColor: "#FBF6F1",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px",
  },
});
