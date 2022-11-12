import React from 'react';
import {Text, View} from 'react-native';
import MainHeader from '../components/MainHeader';

const HomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <MainHeader />
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
