import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {GlobalVariable} from '../context/AppContext';
import AppStack from './AppStack';
import {AuthStackScreen} from './StackScreens';
import auth from '@react-native-firebase/auth';

const Routes = () => {
    const {user, setUser} = GlobalVariable();
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = userValue => {
        setUser(userValue);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStackScreen />}
        </NavigationContainer>
    );
};

export default Routes;
