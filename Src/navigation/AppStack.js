import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import AddScreen from '../screens/AddScreen';
import DetailScreen from '../screens/DetailsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SearchScreen from '../screens/SearchScreen';
import {HomeStackScreen} from './StackScreens';

const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === 'User') {
                        iconName = focused ? 'logo-octocat' : 'logo-octocat';
                    } else if (rn === 'Search') {
                        iconName = focused ? 'search' : 'search';
                    } else if (rn === 'Favorite') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (rn === 'Add') {
                        iconName = focused
                            ? 'add-circle'
                            : 'add-circle-outline';
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="User" component={DetailScreen} />
        </Tab.Navigator>
    );
};

export default AppStack;
