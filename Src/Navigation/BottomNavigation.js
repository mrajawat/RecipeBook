// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//Screens
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailsScreen';
import SearchScreen from '../Screens/SearchScreen';
import VideoScreen from '../Screens/VideoScreen';

//Screennames
const Home = 'Home';
const User = 'Detail';
const Search = 'Search';
const Video = 'Video';

const Tab = createBottomTabNavigator();


const tabsNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Home}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (rn === 'User') {
                            iconName = focused ? 'logo-octocat' : 'logo-octocat'
                        }
                        else if (rn === 'Search') {
                            iconName = focused ? 'search' : 'search'
                        }
                        else if (rn === 'Video') {
                            iconName = focused ? 'play-circle' : 'play-circle-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                    labelStyle: { paddingBottom: 5, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}


            >

                <Tab.Screen name='Home' component={HomeScreen} />

                <Tab.Screen name='Search' component={SearchScreen} />

                <Tab.Screen name='Video' component={VideoScreen} />

                <Tab.Screen name='User' component={DetailScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabsNavigation
