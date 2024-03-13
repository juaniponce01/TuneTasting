import AsyncStorage from "@react-native-async-storage/async-storage";

const getDeviceId = async () => {
    const accessToken = await AsyncStorage.getItem('token');
    try {
        const response = await fetch('https://api.spotify.com/v1/me/player/devices', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            console.log(response);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const devices = data.devices;
        // Here you can select the desired device based on your requirements
        const deviceId = devices.length > 0 ? devices[0].id : null;
        return deviceId;
    } catch (error) {
        console.error('Error fetching devices:', error);
        return null;
    }
};

export default getDeviceId;