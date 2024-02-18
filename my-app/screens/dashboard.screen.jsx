import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../components/logo.component';
import { Button, XGroup } from 'tamagui'

import { LayoutDashboard } from '@tamagui/lucide-icons'
import { Camera } from '@tamagui/lucide-icons'
import { ClipboardList } from '@tamagui/lucide-icons'
import {
    useFonts,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
} from '@expo-google-fonts/sora';

const DashboardScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Sora_400Regular,
        Sora_500Medium,
        Sora_600SemiBold,
        Sora_700Bold,
    });

  return (
    <View style={styles.container}>
   
        <XGroup>
  
  <XGroup.Item>

    <Button icon = {<LayoutDashboard size="$2"/>}></Button>

  </XGroup.Item>

  <XGroup.Item>

    <Button icon = {<Camera size = "$2"/>}> </Button>

  </XGroup.Item>

  <XGroup.Item>

    <Button icon = {<ClipboardList size = "$2"/>}></Button>

  </XGroup.Item>

</XGroup>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF6F1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});