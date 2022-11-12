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
                paddingHorizontal: 20,
                paddingVertical: 10,
            }}>
            <Ionicons
                name="arrow-back"
                size={25}
                color="#000"
                onPress={() => {
                    navigation.goBack();
                }}
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
            />
        </View>
    );
};

export default SubHeader;
