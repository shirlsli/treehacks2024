import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {
    useFonts,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
} from '@expo-google-fonts/sora';

const Logo = () => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });
  const green_logo = require("../assets/leaves-green.svg");
  
  return (
    <View style={styles.container}>
        <div style={styles.logo_div}>
            <Text style={styles.logoName}>mendwell</Text>
            <Image style={styles.logoImg} source={green_logo}/> 
        </div>
      
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
    logo_div: {
        display: 'flex',
        flexDirection: 'row',
    },

    logoName: {
        fontFamily: 'Sora_500Medium',
        fontSize: '32px',
        textAlign: 'center',
        color: '#556B2F'
    },

    logoImg: {
        height: '30px',
        width: '30px',
        marginLeft: '5px',
        marginTop: '3px'
    }
});