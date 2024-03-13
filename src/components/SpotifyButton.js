import React from 'react';
import { Pressable, Linking, Text, StyleSheet } from 'react-native';

const SpotifyButton = ({ trackUri }) => {
    const openInSpotify = () => {
        const spotifyUrl = `https://open.spotify.com/track/${trackUri}`;
        Linking.openURL(spotifyUrl);
    };

    return (
        <Pressable style={styles.button} onPress={openInSpotify}>
            <Text style={styles.buttonText}>Open in Spotify</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SpotifyButton;
