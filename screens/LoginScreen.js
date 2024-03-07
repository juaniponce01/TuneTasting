import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginButton from '../components/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import authenticate from '../auth/Authenticate';
import { useEffect } from 'react';

const logo = require("../assets/TuneTasting-Logo.png");

const LoginScreen = () => {
    return (
    <LinearGradient colors = {["#040306", "#131624"]} style={{ flex: 1 }}>
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.text}> Your Daily Song Discovery! </Text>
        </View>
        <View style={styles.buttonContainer}>
            <LoginButton />
        </View>
    </LinearGradient>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align items to the start of the container (top)
        alignItems: 'center',
        paddingTop: 150, // Adjust top padding to move the container down
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start', 
        marginBottom: 50, // Adjust bottom padding to move the container up
    }
})