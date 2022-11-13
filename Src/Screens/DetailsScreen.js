import React from 'react';
import {Button, Text, View} from 'react-native';
import {GlobalVariable} from '../context/AppContext';

const DetailsScreen = () => {
    const {logout} = GlobalVariable();
    return (
        <View style={{flex: 1}}>
            <Button title="Logout" onPress={() => logout()} />
            <Text>DetailsScreen</Text>
        </View>
    );
};

export default DetailsScreen;
