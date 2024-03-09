import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import getRecommendations from '../services/getRecommendations';

export default function TasteButton({onPress}) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Taste</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 200,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#BF391B',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});