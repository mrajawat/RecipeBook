import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import MainHeader from '../components/custom/MainHeader';
import Card from '../components/home/Card';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
            <MainHeader />
            <ScrollView
                contentContainerStyle={{paddingHorizontal: 5, paddingTop: 10}}>
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
