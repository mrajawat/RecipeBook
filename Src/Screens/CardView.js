import moment from 'moment';
import React, {useState} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SubHeader from '../components/custom/SubHeader';
import {GlobalVariable} from '../context/AppContext';

const CardView = ({route}) => {
    const {data} = route.params;
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
                <TouchableOpacity
                    onPress={() => likeButton(!like)}
                    activeOpacity={0.8}
                    style={styles.Icon}>
                    <Ionicons
                        name={like ? 'heart' : 'heart-outline'}
                        size={37}
                        color={like ? 'red' : 'black'}
                    />
                </TouchableOpacity>
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
        height: 42,
    },
    Icon: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 20,
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
