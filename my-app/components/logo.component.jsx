import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {
    useFonts,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
} from '@expo-google-fonts/sora';

const Logo = ({ fontFamily, fontSize, imageSize, color }) => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });
  const green_logo = require("../assets/leaves-green.svg");
  const white_logo = require("../assets/leaves_icon_white.svg");
  
  return (
    <View style={styles.container}>
        <div style={styles.logo_div}>
            <Text style={[styles.logoName, { fontSize: fontSize, fontFamily: fontFamily }]}>mendwell</Text>
            <Image style={[styles.logoImg, { height: imageSize, width: imageSize }]} source={color ? green_logo : white_logo}/> 
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
        textAlign: 'center',
        color: '#556B2F'
    },

    logoImg: {
        marginLeft: '5px',
        marginTop: '3px'
    }
});