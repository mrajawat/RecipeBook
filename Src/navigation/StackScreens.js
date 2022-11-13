import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardView from '../screens/CardView';

const Home = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <Home.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{headerShown: false}}>
            <Home.Screen name="HomeScreen" component={HomeScreen} />
            <Home.Screen name="CardView" component={CardView} />
            <Home.Screen name="Notification" component={NotificationScreen} />
        </Home.Navigator>
    );
};
