import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
        className={`bg-[#4F63AC] rounded-lg min-h-[50px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        onPress={handlePress}
        activeOpacity={0.7}
    >
        <Text className={`text-white ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton