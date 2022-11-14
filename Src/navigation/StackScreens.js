import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardView from '../screens/CardView';
import Register from '../screens/Register';
import FavoriteScreen from '../screens/FavoriteScreen';

const Home = createStackNavigator();
const AuthStack = createStackNavigator();

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


export const FavoriteStackScreen = () => {
    return (
        <Home.Navigator
            initialRouteName="FavoriteScreen"
            screenOptions={{headerShown: false}}>
            <Home.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Home.Screen name="CardView" component={CardView} />
        </Home.Navigator>
    );
};

export const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Register"
            screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    );
};
