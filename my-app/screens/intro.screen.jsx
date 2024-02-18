import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../components/logo.component';
import {Button} from "tamagui";
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
        <div style={styles.navbar}>
            <Logo fontFamily={'Sora_500Medium'} fontSize={24} imageSize={20} color={true}/>
        </div>
        <div style={styles.body}>
            <div style={styles.cta_container}>
                <Text style={styles.cta_message}>Manage your health, one scan at a time.</Text>
            </div>
            
            <Button size="$3" style={styles.gs_btn}>get started</Button>
            <div style={styles.cta_text}>
                <Text style={{color: '#556B2F'}}>Already got an account?</Text>
            </div>
        </div>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF6F1',
    height: '100%',
  },

  navbar: {
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '50px',
  },


  body: {
    display: 'box',
    height: '400px',
    width: '300px',
    margin: 'auto',
    transform: 'translate(0, -10%)',
    justifyContent: 'center'
  },

  cta_container: {
    height: '191px',
    width: '251px',
    margin: 'auto'
  },

  cta_message: {
    overflow: 'wrap',
    fontSize: '40px',
    color: '#556B2F',
    fontFamily: 'Sora_400Regular',
    textAlign: 'center',
  },

  gs_btn: {
    marginTop: '60px',
    marginLeft: '33%',
    backgroundColor: '#B0C38F'
  },

  cta_text: {
    marginTop: '30px',
    textAlign: 'center',
  }
});