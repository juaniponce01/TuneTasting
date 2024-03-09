import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const ButtonPlayer = ({track_url}) => {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Load the audio file when the component mounts
        (async () => {
            const { sound } = await Audio.Sound.createAsync(
                track_url
            );
            setSound(sound);
        })();

        // Unload the audio when the component unmounts
        return () => {
            sound && sound.unloadAsync();
        };
    }, []);

    const playSound = async () => {
        try {
            if (!isPlaying) {
                // If audio is not playing, start playing
                await sound.playAsync();
                setIsPlaying(true);
            } else {
                // If audio is playing, pause
                await sound.pauseAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.error('Failed to play/pause the sound', error);
        }
    };

    return (
        <View>
            <Button title={isPlaying ? "Pause Audio" : "Play Audio"} onPress={playSound} />
        </View>
    );
};

export default ButtonPlayer;
