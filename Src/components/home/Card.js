import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Card = () => {
    return (
        <Pressable style={styles.Container}>
            <Text>Card</Text>
        </Pressable>
    );
};

export default Card;

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 240,
        borderRadius: 5,
        elevation: 4,
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginBottom: 10,
    },
});
