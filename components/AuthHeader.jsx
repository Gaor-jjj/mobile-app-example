import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import icons from 'constants/icons'

const AuthHeader = ({title, handlePress, containerStyles, textStyles}) => {
  return (
    <View className={`flex-row items-center ${containerStyles}`}>
        <Pressable onPress={handlePress} hitSlop={20} accessibilityLabel="Go back">
            <Image source={icons.back} className="h-[20px] w-[20px]"/>
        </Pressable>
        <Text className={`text-primary px-[16px] ${textStyles}`}>{title}</Text>
    </View>
  )
}

export default AuthHeader