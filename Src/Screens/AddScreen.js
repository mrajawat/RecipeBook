import React, {useState} from 'react';
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {GlobalVariable} from '../context/AppContext';

const AddScreen = () => {
    const [heading, setHeading] = useState('');
    const [recipe, setRecipe] = useState('');
    const [image, setImage] = useState('');
    const {addPost, uploading, transferred} = GlobalVariable();

    const addImage = () => {
        ImagePicker.openPicker({}).then(images => {
            setImage(images.path);
        });
    };

    const addRecipe = () => {
        if (heading == '' || recipe == '' || image == '') {
            alert('Please Fill all Details');
        } else {
            addPost(heading, recipe, image);
            setHeading('');
            setRecipe('');
            setImage('');
        }
    };

    if (uploading) {
        return (
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    zIndex: 11,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <ActivityIndicator size={80} color="black" />
                <Text style={{color: 'black', fontSize:22}}>{transferred}% Uploading</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollView}>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <View style={styles.ItemContainer}>
                        <Text style={styles.Text}>Heading</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter Heading"
                            autoCapitalize="words"
                            autoCorrect={false}
                            keyboardType="default"
                            value={heading}
                            onChangeText={text => setHeading(text)}
                        />
                    </View>

                    <View style={styles.ItemContainer}>
                        <Text style={styles.Text}>Recipe</Text>
                        <TextInput
                            style={[
                                styles.TextInput,
                                {textAlignVertical: 'top'},
                            ]}
                            placeholder="Enter Your Recipe"
                            autoCapitalize="sentences"
                            keyboardType="default"
                            autoCorrect={false}
                            multiline
                            numberOfLines={5}
                            value={recipe}
                            onChangeText={text => setRecipe(text)}
                        />
                    </View>

                    <View style={styles.ItemContainer}>
                        <Text style={styles.Text}>Add Image</Text>
                        <View style={styles.ImageContainer}>
                            {image ? (
                                <>
                                    <Image
                                        source={{uri: image}}
                                        style={styles.ImageStyle}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setImage('')}
                                        style={styles.CrossButton}>
                                        <Text style={styles.CrossButtonText}>
                                            X
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => addImage()}
                                    style={styles.TouchableOpacityStyle}>
                                    <Text>Add Image</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    <View style={styles.ItemContainer}>
                        <TouchableOpacity
                            style={[
                                styles.AddButton,
                                {opacity: uploading ? 0.7 : 1},
                            ]}
                            disabled={uploading ? true : false}
                            onPress={() => addRecipe()}>
                            <Text style={styles.AddButtonText}>Add Recipe</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddScreen;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    ScrollView: {},
    KeyboardAvoidingView: {flex: 1},
    ItemContainer: {
        marginVertical: 8,
    },
    Text: {
        fontSize: 20,
        marginBottom: 10,
    },
    TextInput: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    ImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageStyle: {
        width: '80%',
        height: 150,
    },
    TouchableOpacityStyle: {
        width: 130,
        paddingVertical: 10,
        backgroundColor: 'cyan',
        alignItems: 'center',
        borderRadius: 5,
    },
    CrossButton: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'red',
        position: 'absolute',
        top: -20,
        right: 20,
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CrossButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    },
    AddButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    AddButtonText: {
        color: 'white',
        fontSize: 18,
    },
});
