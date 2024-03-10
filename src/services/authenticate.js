import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function authenticate() {
    console.log("Authenticating with spotify");
    console.log("navigation set")
    const clientId = "da18b53a39aa4a058fc6ad6ee05af0ff";
    const config = {
        issuer: "https://accounts.spotify.com",
        clientId: clientId,
        scopes: [
            "user-read-email",
            "user-library-read",
            "user-read-recently-played",
            "user-top-read",
            "playlist-read-private",
            "playlist-read-collaborative",
            "playlist-modify-public" // or "playlist-modify-private"
        ],
        redirectUrl: "exp://localhost:8081/--/spotify-auth-callback",
    }
    const result = await AppAuth.authAsync(config);
    console.log(result);
    if (result.accessToken) {
        const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
        AsyncStorage.setItem("token", result.accessToken);
        AsyncStorage.setItem("expirationDate", expirationDate.toString());
    }
    console.log("Authentication complete");
};