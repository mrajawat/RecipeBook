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
import NotificationScreen from '../Screens/NotificationScreen';
import AddScreen from '../Screens/AddScreen';

//Screennames
const Home = 'Home';
const User = 'Detail';
const Search = 'Search';
const Notification = 'Notification';
const Add = 'Add';

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
                        else if (rn === 'Notification') {
                            iconName = focused ? 'notifications-sharp' : 'notifications-outline'
                        }
                        else if (rn === 'Add') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}

                tabBarOptions={{
                    activeTintColor: '#000',
                    inactiveTintColor: 'gray',
                    labelStyle: { paddingBottom: 5, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}


            >

                <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />

                <Tab.Screen name='Search' component={SearchScreen} options={{ headerShown: false }} />

                <Tab.Screen name='Add' component={AddScreen} options={{ headerShown: false }} />

                <Tab.Screen name='Notification' component={NotificationScreen} options={{ headerShown: false }} />

                <Tab.Screen name='User' component={DetailScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabsNavigation
