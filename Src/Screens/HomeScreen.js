import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import MainHeader from '../components/custom/MainHeader';
import Card from '../components/home/Card';
import {GlobalVariable} from '../context/AppContext';

const HomeScreen = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const {added, setAdded} = GlobalVariable();

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
    }, []);

    useEffect(() => {
        fetchPosts();
        setAdded(false);
    }, [added]);

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
            <MainHeader />
            <FlatList
                data={posts}
                extraData={posts}
                renderItem={({item}) => {
                    return (
                        <View style={{paddingHorizontal: 5, paddingTop: 10}}>
                            <Card data={item} />
                        </View>
                    );
                }}
                keyExtractor={item => item.postId}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
