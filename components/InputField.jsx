import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

const InputField = ({ label, placeholder, isPassword, value, onChangeText }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View className="mb-[20px]">
            <Text className="mb-2 text-primary font-mmedium">{label}</Text>
            <View className="border border-gray rounded-lg flex-row items-center">
                <TextInput
                className="px-[16px] py-[20px] flex-1"
                placeholder={placeholder}
                placeholderTextColor="#C5C5C5"
                secureTextEntry={isPassword && !isPasswordVisible}
                value={value}
                onChangeText={onChangeText}
                />
                {
                    isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image
                                source={isPasswordVisible ? icons.eye : icons.eye_closed}
                                className="w-[24px] h-[24px] mx-2"
                            />
                        </Pressable>
                    ) : null
                }
            </View>
        </View>
    )
}

export default InputField