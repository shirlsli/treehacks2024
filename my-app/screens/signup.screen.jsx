import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'tamagui';

const Signup = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>full name</Text>
        <Text style={styles.label}>email</Text>
        <Text style={styles.label}>password</Text>
        <Text style={styles.label}>confirm password</Text>
      </View>
      <Button>next</Button>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#B0C38F',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    labelContainer: {
      alignItems: 'flex-start',
    },
    label: {
      textAlign: 'left',
      marginBottom: 5,
        fontFamily: 'Sora',
        fontWeight: 500,
        fontSize: "20px",
        color: "#FBF6F1"
    },
    button: {
      backgroundColor: '#FBF6F1',
      padding: 10,
      borderRadius: 7,
      margin: 10,
      width: 108,
      height: 41,
      textAlign: "center",
      fontFamily: "Inter"
    },
    inputBox: {
        width: "272px",
        height: "29px",
        background: "#FBF6F1",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px"
    }
});
