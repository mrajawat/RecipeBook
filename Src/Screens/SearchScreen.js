import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {GlobalVariable} from '../context/AppContext';

const SearchScreen = () => {
    const {added, setAdded, fetchFavoriteList, favoriteList} = GlobalVariable();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const list = [];
            await firestore()
                .collection('posts')
                .orderBy('postTime', 'desc')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
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
                    });
                });

            setPosts([...list]);

            if (loading) {
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchFavoriteList();
    }, []);

    useEffect(() => {
        fetchPosts();
        setAdded(false);
    }, [added]);

    useEffect(() => {
        fetchPosts();
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
        <View style={{flex: 1}}>
            <Text>SearchScreen</Text>
        </View>
    );
};

export default SearchScreen;
