import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authenticate from '../services/authenticate';

const logo = require("../../assets/TuneTasting-Logo.png");

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleAuthentication = async () => {
        await authenticate();
        console.log("navigating to main");
        navigation.navigate("Main");
    }

    useEffect(() => {
        const checkTokenValidity = async () => {
            const accessToken = await AsyncStorage.getItem("token");
            const expirationDate = await AsyncStorage.getItem("expirationDate");
            console.log("acess token", accessToken);
            console.log("expiration date", expirationDate);

            if (accessToken && expirationDate) {
                const currentTime = Date.now();
                if (currentTime < parseInt(expirationDate)) {
                    // here the token is still valid
                    console.log("token is still valid");
                    navigation.replace("Main");
                } else {
                    // token would be expired so we need to remove it from the async storage
                    AsyncStorage.removeItem("token");
                    AsyncStorage.removeItem("expirationDate");
                }
            }
        }
        checkTokenValidity();
    }, [])

    
    return (
    <LinearGradient colors = {["#040306", "#131624"]} style={{ flex: 1 }}>
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.text}> Your Daily Song Discovery! </Text>
            <View style={styles.buttonContainer}>
                <LoginButton onPress={handleAuthentication} />
                <Pressable style={styles.mainButton} onPress={() => navigation.navigate("Main")}>
                    <Text>Go to Main</Text>
                </Pressable>
            </View>
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
    },
    mainButton: {
        backgroundColor: "white",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 320,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    }
})