import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AudioPlayer } from './AudioPlayer';
import ButtonPlayer from './ButtonPlayer';


const Track = ({ key, track }) => {
    const track_url = track.preview_url;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     const loadSound = async () => {
    //         try {
    //             if (track_url) {
    //                 const { sound } = await Audio.Sound.createAsync(
    //                     { uri: track_url }
    //                 );
    //                 setSound(sound);
    //             } else {
    //                 console.warn('Track preview URL is null or undefined');
    //             }
    //         } catch (error) {
    //             console.error('Failed to load sound', error);
    //         }
    //     };

    //     loadSound();

    //     // Cleanup function to unload the sound when the component unmounts
    //     return () => {
    //         if (sound) {
    //             sound.unloadAsync();
    //         }
    //     };
    // }, [track_url]); // Re-run effect when the track_url changes
    // const playSound = async () => {
    //     try {
    //         if (sound) {
    //             if (!isPlaying) {
    //                 await sound.playAsync();
    //                 setIsPlaying(true);
    //             } else {
    //                 await sound.pauseAsync();
    //                 setIsPlaying(false);
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Failed to play/pause the sound', error);
    //     }
    // };

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: track.album.images[0].url }} style={styles.image} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{track.name}</Text>
                <Text style={styles.artist}>{track.artists.map(artist => artist.name).join(', ')}</Text>
                <Text style={styles.album}>{track.album.name}</Text>
                {/* Render your play/pause button here */}
                {/* <ButtonPlayer isPlaying={isPlaying} onPress={playSound} /> */}
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 500,
        borderRadius: 18,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#FFF', // Example background color
    },
    imageContainer: {
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginHorizontal: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        numberOfLines: 1,
        ellipsizeMode: 'tail',
    },
    artist: {
        fontSize: 18,
        color: '#666',
        fontWeight: 'bold',
        numberOfLines: 1,
        ellipsizeMode: 'tail',
    },
    album: {
        fontSize: 18,
        color: '#666',
    },
    // Add more styles as needed
});

export default Track;
