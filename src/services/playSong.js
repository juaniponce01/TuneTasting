import AsyncStorage from '@react-native-async-storage/async-storage';

const playSong = async (contextUri, device_id) => {
    console.log('playing song on spotify');
    const accessToken = await AsyncStorage.getItem('token');
    const url = 'https://api.spotify.com/v1/me/player/play?device_id='+device_id;
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    };
    const data = {
        "context_uri": contextUri,
        "offset": {
            "position": 5
        },
        "position_ms": 0
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: data
        });

        if (!response.ok) {
            console.log('Failed to play song:', response);
            throw new Error('Failed to play song');
        }

        const responseData = await response.json();
        console.log('Song played successfully:', responseData);
    } catch (error) {
        console.error('Error playing song:', error.message);
    }
};

export default playSong;