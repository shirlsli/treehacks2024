import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../components/logo.component';

import {
    useFonts,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
} from '@expo-google-fonts/sora';

const IntroScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Sora_400Regular,
        Sora_500Medium,
        Sora_600SemiBold,
        Sora_700Bold,
    });

  
  
  return (
    <View style={styles.container}>
        <Logo />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF6F1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});