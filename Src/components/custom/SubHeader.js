import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubHeader = ({title}) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 5,
            }}>
            <Ionicons
                name="arrow-back"
                size={25}
                color="#000"
                onPress={() => {
                    navigation.goBack();
                }}
                style={{padding: 5, paddingHorizontal: 10}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                {title}
            </Text>
            <Ionicons
                name="ios-information-circle-outline"
                size={25}
                color="#000"
                onPress={() => {
                    console.log('Info');
                }}
            style={{padding: 5, paddingHorizontal: 10}}
            />
        </View>
    );
};

export default SubHeader;
