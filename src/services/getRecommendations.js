import AsyncStorage from "@react-native-async-storage/async-storage";

const getRecommendations = async () => {
    console.log('Fetching recommendations');
    const accessToken = await AsyncStorage.getItem('token');
    if (!accessToken) {
        throw new Error('No access token found');
    }
    console.log('Access token found:', accessToken);
    try {
        const response = await fetch(
            'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch recommendations');
        }

        const data = await response.json();
        return data.tracks;
    } catch (error) {
        throw new Error(`Error fetching recommendations: ${error.message}`);
    }
};

export default getRecommendations;
