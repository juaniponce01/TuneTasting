import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import TasteButton from '../components/TasteButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getRecommendations from '../services/getRecommendations'
import NoTrackList from '../components/NoTrackList'
import TrackList from '../components/TrackList'
import { Audio } from 'expo-av';
import { Player } from '../../PlayerContext';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [trackList, setTrackList] = useState([]); // State to store the track list
  const {currentTrack, setCurrentTrack} = useContext(Player);
  const [currentSound, setCurrentSound] = useState(null); // State to store the current sound [UNUSED]
  const [isPlaying, setIsPlaying] = useState(false); // State to store the current playing status [UNUSED]
  
  
  const getTrackList = async () => {
    const savedTracks = await AsyncStorage.getItem('tracks');
    if (savedTracks) {
      setTrackList(JSON.parse(savedTracks));
    } else {
      handleFetchTracks();
    }
  }

  const playTrack = async (index) => {
    if (trackList.length > 0) {
      setCurrentTrack(trackList[index]);
    } 
    await play(trackList[index])
  }

  const play = async (track) => {
    if (currentSound) {
      if (currentTrack.id === track.id) {
        handleCurrentTrackPlayPause();
        return;
      } else {
        await currentSound.stopAsync();
        console.log(currentTrack.name, "has stopped")
      }
    } 
    console.log("Playing", track.name);
    const preview_url = track.preview_url;
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: false,
      });
      const { sound, status } = await Audio.Sound.createAsync(
        {
          uri: preview_url,
        },
        {
          shouldPlay: true,
          isLooping: false,
        },
        // onPlaybackStatusUpdate
      );
      setCurrentSound(sound);
      // onPlaybackStatusUpdate(status);
      setIsPlaying(status.isLoaded);
      await sound.playAsync();
    } catch (err) {
      console.log(err.message);
    }
  }

  const onPlaybackStatusUpdate = async (status) => {
    console.log("Playback status: ", status);
  }

  const handleCurrentTrackPlayPause = async () => {
    if (isPlaying) {
      await currentSound.pauseAsync();
      console.log(currentTrack.name, "has paused")
    } else {
      await currentSound.playAsync();
      console.log(currentTrack.name, "has resumed")
    }
    setIsPlaying(!isPlaying);
  }

  const handleFetchTracks = async () => {
    const recommendations = await getRecommendations(); // Fetch tracks from Spotify
    AsyncStorage.setItem('tracks', JSON.stringify(recommendations)); // Save tracks to async storage
    console.log("Fetching new tracks")
    setTrackList(recommendations); // Update track list
    console.log("first preview url: ", recommendations[0].preview_url)
  };

  useEffect(() => {
    getTrackList();
  }, [])

  return (
    <SafeAreaView >
      <ScrollView 
        contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {trackList.length > 0 ? 
          <TrackList trackList={trackList} playTrack={playTrack} />
          : 
          <NoTrackList />}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TasteButton onPress={handleFetchTracks} />
        {/* <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
          <Text style={{color: 'white'}}>Go to Login</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
  },
  buttonsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: "#BF391B",
    width: 320,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40
  },
})
