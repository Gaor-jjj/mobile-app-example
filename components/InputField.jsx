import { View, Text, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';
import categories from '../data/categories';

const InputField = ({ label, placeholder, isPassword, value, onChangeText, keyboardType = 'default', inputStyles = {}, isSelection = false }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State to show/hide dropdown

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleCategorySelect = (categoryName) => {
        onChangeText(categoryName);
        setShowDropdown(false); // Hide dropdown after selection
    };

    const inputHeight = 56; // Adjust this height to match your other inputs

    // Filter out categories without an id (e.g., "Popular")
    const filteredCategories = categories.filter(item => item.id);

    return (
        <View className="mb-[20px]">
            <Text className="mb-2 text-primary font-mmedium">{label}</Text>
            <View className="border border-gray rounded-lg flex-row items-center">
                {isSelection ? (
                    // Render TouchableOpacity for dropdown
                    <TouchableOpacity
                        onPress={() => setShowDropdown(!showDropdown)}
                        style={[{ justifyContent: 'center', paddingHorizontal: 20, flex: 1, height: inputHeight }, inputStyles]}
                    >
                        <Text style={{ color: value ? '#000' : '#C5C5C5' }}>
                            {value || placeholder}
                        </Text>
                    </TouchableOpacity>
                ) : (
                    // Render TextInput for normal input
                    <TextInput
                        style={[{ paddingVertical: 16, paddingHorizontal: 20, flex: 1, height: inputHeight }, inputStyles]}
                        placeholder={placeholder}
                        placeholderTextColor="#C5C5C5"
                        secureTextEntry={isPassword && !isPasswordVisible}
                        value={value}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                    />
                )}

                {isPassword && (
                    <Pressable onPress={onEyePress}>
                        <Image
                            source={isPasswordVisible ? icons.eye : icons.eye_closed}
                            style={{ width: 24, height: 24, marginHorizontal: 8 }}
                        />
                    </Pressable>
                )}
                {isSelection && (
                    <Pressable onPress={() => setShowDropdown(!showDropdown)}>
                        <Image
                            source={icons.down_simple}  // Assuming you have this icon in your icons file
                            style={{ width: 20, height: 20, marginHorizontal: 8 }}
                        />
                    </Pressable>
                )}
            </View>

            {/* Render Dropdown List without FlatList */}
            {isSelection && showDropdown && (
                <View className="absolute top-[75px] left-0 right-0 z-10 bg-white border border-gray rounded-b-lg">
                {filteredCategories.map((item) => {
                    const key = item.id;
                    return (
                        <TouchableOpacity
                            key={key}  // Ensure the key is unique
                            onPress={() => handleCategorySelect(item.name)}
                            className="px-[16px] py-[12px] flex-row items-center"
                        >
                            <Image source={item.icon} className="w-[20px] h-[20px] mr-[12px]" />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>            
            )}
        </View>
    );
};

export default InputField;
