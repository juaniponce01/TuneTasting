import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, Pressable } from 'react-native';
import TextTicker from 'react-native-text-ticker'
import SpotifyButton from './SpotifyButton';


const Track = ({ track, play, toSpotify, isPlaying }) => {

    const handlePlayTrack = () => {
        play(track)
    }

    const playOnSpotify = () => {
        toSpotify(track)
    }

    const toMs = (seconds) => {
        return seconds * 1000;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: track.album.images[0].url }} style={styles.image} />
            </View>
            <View style={styles.info}>
                <TextTicker style={styles.title} loop bounce duration={100*track.name.length} marqueeDelay={2000}>{track.name}</TextTicker>
                <TextTicker style={styles.artist} bounce marqueeDelay={4000}>{track.artists.map(artist => artist.name).join(', ')}</TextTicker>
                <TextTicker style={styles.album} loop bounce marqueeDelay={2000}>{track.album.name}</TextTicker>
                <View style={styles.playButtonContainer}>
                {track.preview_url && (
                    <Button title={!isPlaying ? "Listen Preview" : "Pause Preview"} onPress={handlePlayTrack} />
                )}
                </View>
                <SpotifyButton trackUri={track.uri} />
            </View>
        </View>
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
    },
    artist: {
        fontSize: 18,
        color: '#666',
        fontWeight: 'bold',
    },
    album: {
        fontSize: 18,
        color: '#666',
    },
    playButtonContainer: {
        marginTop: 10,
    }
    // Add more styles as needed
});

export default Track;
