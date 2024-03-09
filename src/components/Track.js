import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AudioPlayer } from './AudioPlayer';
import ButtonPlayer from './ButtonPlayer';

const Track = ({ track }) => {
    // const [sound, setSound] = useState();
    // const [audioStatus, setAudioStatus] = useState('loading'); // ['loading', 'playing', 'paused'
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [isActive, setIsActive] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [isPlayable, setIsPlayable] = useState(false);
    // const [totalDuration, setTotalDuration] = useState(0);
    // const [duration, setDuration] = useState(0);
    // const playAudio = async () => {
    //     await sound.playAsync();};
    // const pauseAudio = async () => {
    //     await sound.pauseAsync();};
    // const seekAudio = async (position) => {
    //     await sound.setPositionAsync(position);};
    // const playFromPosition = async (position) => {
    //     await sound.playFromPositionAsync(position);};
    // const track_url = track.preview_url;
    // async function loadAudio() {
    //     try {
    //         const { sound, status } = await Audio.Sound.createAsync(
    //             {
    //                 uri: {track_url},
    //                 headers: {
    //                     key: value,
    //                 },
    //             },
    //             { isLooping: false },
    //         );
    //         console.log('Sound object', sound);
    //         console.log('Status object', status);
    //         setSound(sound);
    //         setIsPlayable(true);
    //         setTotalDuration(status.durationMillis);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // useEffect(() => {
    //     loadAudio();
    //     return sound
    //         ? () => {
    //             console.log('Unloading Sound');
    //             sound.unloadAsync();
    //         }
    //         : undefined;
    // }, [sound]);
    return (
        <TouchableOpacity style={styles.container} onPress={() => {/* Handle onPress event */ }}>
            <Image source={{ url: track.album.images[0].url }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{track.name}</Text>
                <Text style={styles.artist}>{track.artists.map(artist => artist.name).join(', ')}</Text>
                <Text style={styles.album}>{track.album.name}</Text>
                {/* <ButtonPlayer track_url={track_url} /> */}
                {/* <AudioPlayer active={isActive} playable={isPlayable} loading={loading} isPlaying={isPlaying} playAudio={playAudio} pauseAudio={pauseAudio} totalDuration={totalDuration} seekAudio={seekAudio} duration={duration} /> */}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 350,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 14,
        color: '#666',
    },
    album: {
        fontSize: 14,
        color: '#666',
    },
    // Add more styles as needed
});

export default Track;
