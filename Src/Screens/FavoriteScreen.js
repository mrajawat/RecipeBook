import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import Card from '../components/home/Card';
import {GlobalVariable} from '../context/AppContext';

const FavoriteScreen = () => {
    const {favoriteList, fetchFavoriteList} =
        GlobalVariable();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchFavoritePosts = async () => {
        try {
            setLoading(true);
            let list = [];
            await favoriteList.map(async postId => {
                await firestore()
                    .collection('posts')
                    .doc(postId)
                    .get()
                    .then(doc => {
                        if (doc.exists) {
                            const {userId, heading, recipe, image, postTime} =
                                doc.data();
                            list.push({
                                postId: doc.id,
                                userId,
                                heading,
                                recipe,
                                image,
                                postTime,
                            });
                            setPosts([...list]);
                        } else setPosts(null);
                    });
            });

                setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFavoritePosts();
        fetchFavoriteList();
    }, []);

    useEffect(() => {
        fetchFavoritePosts();
    }, [favoriteList]);

    if (loading) {
        return (
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    zIndex: 11,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <ActivityIndicator size={80} color="black" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
            <FlatList
                data={posts}
                renderItem={({item}) => {
                    return (
                        <View style={{paddingHorizontal: 5, paddingTop: 10}}>
                            <Card data={item} />
                        </View>
                    );
                }}
                keyExtractor={item => item.postId}
                ListEmptyComponent={() => {
                    return (
                        <Text
                            style={{
                                fontSize: 25,
                                color: 'black',
                                marginVertical: 30,
                                textAlign: 'center',
                            }}>
                            Don't have any Favorite Recipe
                        </Text>
                    );
                }}
            />
        </SafeAreaView>
    );
};

export default FavoriteScreen;
