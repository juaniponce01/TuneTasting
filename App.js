import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './StackNavigator';
import * as Linking from 'expo-linking';
import { useEffect } from 'react';


export default function App() {
    return (
    <>
        <StatusBar style="light" />
        <Navigation />
    </>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
