import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SubHeader from '../components/custom/SubHeader';

const CardView = ({route}) => {
    const {data} = route.params;
    console.log(data);
    return (
        <View style={styles.Container}>
            <SubHeader title="Post" />
            <View style={styles.InnerContainer}>
                <Image
                    source={require('../assets/images/food1.jpg')}
                    style={styles.ImageContainer}
                />
                <Text style={styles.HeadingText}>{data.heading}</Text>
                <Text style={styles.Text}>
                    {data.text}
                    this is a some sample text that i use to create vsdv sds sd
                    sdgs d this is a some sample text that i use to create this
                    is a some sample text that i use to create vsdv sds sd sdgs
                    d this is a some sample text that i use to create
                </Text>
            </View>
        </View>
    );
};

export default CardView;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    InnerContainer: {
        flex: 1,
    },
    ImageContainer: {
        width: '100%',
        height: '60%',
    },
    HeadingText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 22,
        fontWeight: '800',
    },
    Text: {
        fontSize: 15,
        paddingHorizontal: 10,
        height: 42,
    },
    Icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        elevation: 5,
    },
});
