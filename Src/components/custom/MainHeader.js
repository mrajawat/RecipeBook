import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainHeader = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                justifyContent: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
                elevation: 1,
                zIndex: 10
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Recipe Book
            </Text>
            <Ionicons
                name="notifications"
                size={25}
                color="#000"
                style={{position: 'absolute', right: 10, top: 10}}
                onPress={() => navigation.navigate('Notification')}
            />
        </View>
    );
};

export default MainHeader;
