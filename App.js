import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContactsList from './src/screens/ContactsList';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login /> */}
      {/* <Signup /> */}
      <ContactsList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 50
  },
});
