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
import {GlobalVariable} from '../../context/AppContext';

const Card = ({data}) => {
    const navigation = useNavigation();
    let [like, setLike] = useState(false);
    const {favoriteList, setFavoriteList} = GlobalVariable();

    favoriteList.forEach(item => {
        if (item == data.postId) like = true;
    });

    const likeButton = li => {
        setLike(li);
        let list = [...favoriteList];
        let index = list.indexOf(data.postId);
        if (index !== -1) list.splice(index, 1);

        li ? list.push(data.postId) : null;

        setFavoriteList([...list]);
    };

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
                onPress={() => likeButton(!like)}
                activeOpacity={0.8}
                style={styles.Icon}>
                <Ionicons
                    name={like ? 'heart' : 'heart-outline'}
                    size={30}
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
        width: 35,
        height: 35,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,
    },
});
