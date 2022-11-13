import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {GlobalVariable} from '../context/AppContext';

const Register = () => {
    const {login, register} = GlobalVariable();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <TextInput
                placeholder="Name"
                keyboardType="name-phone-pad"
                value={name}
                onChangeText={txt => setName(txt)}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={txt => setEmail(txt)}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={txt => setPassword(txt)}
            />
            <TouchableOpacity
                style={styles.RegisterButton}
                onPress={() => register(email, password, name)}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    RegisterButton: {
        width: 130,
        paddingVertical: 10,
        backgroundColor: 'cyan',
        alignItems: 'center',
    },
});
