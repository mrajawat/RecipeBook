import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import MainHeader from '../components/custom/MainHeader';
import Card from '../components/home/Card';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
            <MainHeader />
            <FlatList
                data={[
                    {id: 1,heading: 'Heading 1',text:''},
                    {id: 2,heading: 'Heading 2',text:''},
                    {id: 3,heading: 'Heading 3',text:''},
                    {id: 4,heading: 'Heading 4',text:''},
                ]}
                renderItem={({item, index}) => {
                    return (
                        <View style={{paddingHorizontal: 5, paddingTop: 10}}>
                            <Card data={item} />
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
