import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Input } from "tamagui";

import {
    useFonts,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
} from '@expo-google-fonts/sora';

const SearchBar = ({user}) => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
        <Input
          size="$3"
          style={styles.inputBox}
          borderWidth={2}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
    inputBox: {
        width: "272px",
        height: "29px",
        background: "#FBF6F1",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
        marginBottom: 50,
      },
});