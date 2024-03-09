import React from 'react';
import { View, StyleSheet } from 'react-native';
import Track from './Track';

class TrackList extends React.Component {
    render() {
        return (
            <View>
                {this.props.trackList.map((track, index) => (
                    <Track key={index} track={track} />
                ))}
            </View>
        );
    }
}

export default TrackList;

const styles = StyleSheet.create({
});