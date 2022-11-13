import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({data}) => {
    const [like, setLike] = useState(false);
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate('CardView', {data: data})}
            style={styles.Container}>
            <View style={styles.InnerContainer}>
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
            </View>
            <TouchableOpacity
                onPress={() => setLike(!like)}
                activeOpacity={0.8}
                style={styles.Icon}>
                <Ionicons
                    name={like ? 'heart' : 'heart-outline'}
                    size={35}
                    color={like ? 'red' : 'black'}
                />
            </TouchableOpacity>
        </Pressable>
    );
};

export default Card;

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 240,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginBottom: 10,
    },
    InnerContainer: {
        flex: 1,
    },
    ImageContainer: {
        width: '100%',
        height: '60%',
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
