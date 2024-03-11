import { StyleSheet, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import authenticate from "../services/authenticate";

export default function LoginButton({onPress}) {
    return (
        <Pressable style={styles.spotifyButton} onPress={onPress} >
            <Text>Sign In with spotify</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    spotifyButton: {
        backgroundColor: "#1DB954",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 320,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
});