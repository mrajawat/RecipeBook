import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Home = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <Home.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{headerShown: false}}>
            <Home.Screen name="HomeScreen" component={HomeScreen} />
            <Home.Screen name="Notification" component={NotificationScreen} />
        </Home.Navigator>
    );
};
