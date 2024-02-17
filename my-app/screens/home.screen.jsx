import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Post from '../components/post.component';
import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>full name</Text>
      <Text>email</Text>
      <Text>password</Text>
      <Text>confirm password</Text>
      <Button
        title='next'
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
      <FlatList 
        data={posts}
        renderItem={({ item }) => <Post title={item.title} body={item.body} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B0C38F',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    backgroundColor: '#FBF6F1',
    padding: 10,
    borderRadius: 7,
    margin: 10,
    width: 108,
    height: 41,
    boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  },
});