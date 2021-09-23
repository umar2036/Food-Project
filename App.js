import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreen from './src/screens/NavigationScreen';

export default function App() {
  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app,,,,,,,,,,,,it's working !</Text>
      <StatusBar style="auto" />
    </View>*/
    <NavigationScreen></NavigationScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
