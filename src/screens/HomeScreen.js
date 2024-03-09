import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TasteButton from '../components/TasteButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getRecommendations from '../services/getRecommendations'
import NoTrackList from '../components/NoTrackList'
import TrackList from '../components/TrackList'

const HomeScreen = () => {
  let [trackList, setTrackList] = useState([]); 

  const getTrackList = async () => {
    const tracks = await AsyncStorage.getItem('tracks');
    if (tracks) {
      setTrackList(JSON.parse(tracks));
    }
  }

  const handleFetchTracks = async () => {
    const recommendations = await getRecommendations(); // Fetch tracks from Spotify
    AsyncStorage.setItem('tracks', JSON.stringify(recommendations)); // Save tracks to async storage
    console.log("Fetching new tracks")
    setTrackList(recommendations); // Update track list
  };

  useEffect(() => {
    handleFetchTracks();
  }, [])

  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {trackList.length > 0 ? 
          <TrackList trackList={trackList} /> 
          : 
          <NoTrackList />}
        <TasteButton onPress={handleFetchTracks} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 10,
    marginBottom: 200,
    alignItems: 'center',
  },
})