import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { useRouter } from 'expo-router';
import { icons } from '../../../constants';
import * as ImagePicker from 'expo-image-picker';

const CreateListing = () => {
    const router = useRouter();
    const [images, setImages] = useState([]);

    const handleImagePick = async () => {
        // Ask for permission to access the gallery if not already granted
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access gallery is required!');
            return;
        }

        // Launch the image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            setImages(prevImages => [...prevImages, result.assets[0].uri]);
        }
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, idx) => idx !== index));
    };

    return (
        <SafeAreaView className="bg-white flex-1" edges={['top']}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }} className="mt-5">
                <Header
                    title="Create a new listing"
                    showBack
                    onBackPress={() => router.back()}
                />
                <Text className="text-primary font-mregular mt-5">Upload photos</Text>

                <View className="flex-row flex-wrap mt-3">
                    {/* Image Picker Button */}
                    <TouchableOpacity
                        onPress={handleImagePick}
                        className="w-[30%] h-24 border-2 border-dotted border-gray-300 rounded-lg justify-center items-center bg-white mb-4 mx-1"
                    >
                        <View className="w-10 h-10 rounded-full bg-gray-200 justify-center items-center">
                            <Text className="text-2xl text-white font-mbold">+</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Display selected images */}
                    {images.map((uri, index) => (
                        <View key={index} className="relative w-[30%] h-24 rounded-lg mb-4 mx-1">
                            <Image
                                source={{ uri }}
                                className="w-full h-full rounded-lg"
                            />
                            <TouchableOpacity
                                onPress={() => handleRemoveImage(index)}
                                className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full justify-center items-center mt-[-8px] mr-[-10px]"
                            >
                                <Image source={icons.remove} className="h-5 w-5"/> 
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateListing;
