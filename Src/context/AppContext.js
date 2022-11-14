import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [added, setAdded] = useState(false);
    const [favoriteList, setFavoriteList] = useState([]);

    const register = async (email, password, name) => {
        try {
            const result = await auth().createUserWithEmailAndPassword(
                email,
                password,
            );
            firestore().collection('users').doc(result.user.uid).set({
                name: name,
                email: result.user.email,
                uid: result.user.uid,
                favorite: [],
            });
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            const result = await auth().signInWithEmailAndPassword(
                email,
                password,
            );
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            const result = await auth().signOut();
        } catch (error) {
            console.log(error);
        }
    };

    const addPost = async (heading, recipe, image) => {
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

        setUploading(true);
        setTransferred(0);

        const storageRef = storage().ref(`photos/${Date.now()}_${filename}`);
        const task = storageRef.putFile(uploadUri);

        task.on('state_changed', taskSnapshot => {
            setTransferred(
                Math.round(
                    (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
                        100,
                ),
            );
        });

        try {
            await task;
            const imageUrl = await storageRef.getDownloadURL();

            firestore()
                .collection('posts')
                .add({
                    userId: user.uid,
                    heading: heading,
                    recipe: recipe,
                    image: imageUrl,
                    postTime: firestore.Timestamp.fromDate(new Date()),
                })
                .then(() => console.log('Post Added'))
                .catch(err => console.log(err));

            setUploading(false);
            Alert.alert(
                'Recipe Uploaded!',
                'Your recipe uploaded successfully',
            );
            setAdded(true);
        } catch (error) {
            console.log(error);
        }
    };

    const addFavorite = async list => {
        try {
            await firestore().collection('users').doc(user.uid).update({
                favorite: list,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFavoriteList = async () => {
        try {
            await firestore()
                .collection('users')
                .doc(user.uid)
                .get()
                .then(querySnapshot => {
                    const {favorite} = querySnapshot.data();
                    setFavoriteList([...favorite]);
                });
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        if (user != null) addFavorite(favoriteList);
    }, [favoriteList]);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                register,
                login,
                logout,
                addPost,
                uploading,
                transferred,
                added,
                setAdded,
                favoriteList,
                setFavoriteList,
                addFavorite,
                fetchFavoriteList,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const GlobalVariable = () => useContext(AppContext);
