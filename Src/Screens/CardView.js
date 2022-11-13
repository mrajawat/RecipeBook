import moment from 'moment';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import SubHeader from '../components/custom/SubHeader';

const CardView = ({route}) => {
    const {data} = route.params;

    return (
        <View style={styles.Container}>
            <SubHeader title="Post" />
            <ScrollView contentContainerStyle={styles.InnerContainer}>
                <Image
                    source={{uri: data.image}}
                    style={styles.ImageContainer}
                />
                <View style={styles.HeadingTextContainer}>
                    <Text style={styles.HeadingText}>{data.heading}</Text>
                    <Text style={styles.DateText}>
                        {moment(data.postTime.toDate()).fromNow()}
                    </Text>
                </View>
                <Text style={styles.Text}>{data.recipe}</Text>
            </ScrollView>
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
        paddingVertical: 5,
        paddingBottom: 20,
    },
    ImageContainer: {
        width: '100%',
        height: 300,
    },
    HeadingTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    HeadingText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 22,
        fontWeight: '800',
    },
    DateText: {
        fontSize: 12,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    Text: {
        fontSize: 15,
        paddingHorizontal: 10,
    },
});
