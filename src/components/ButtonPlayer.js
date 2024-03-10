import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const ButtonPlayer = ({isPlaying, onPress}) => {
    return (
        <View>
            <Button title={isPlaying ? "Pause Audio" : "Play Audio"} onPress={onPress} />
        </View>
    );
};

export default ButtonPlayer;
