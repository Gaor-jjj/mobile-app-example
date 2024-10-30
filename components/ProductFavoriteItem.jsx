import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import icons from '../constants/icons'

const ProductHomeItem = ({ title, image, price, onPress, onRemove }) => {
  return (
    <View className="flex-row py-4 mx-4 border-b border-gray-200">
        <Pressable onPress={onPress} className="flex-row flex-1">
            <Image
                source={{ uri: image }}
                className="w-[100px] h-[100px] rounded-lg"
            />
            <View className="ml-4 mt-2">
                <Text className="text-sm text-gray-500">{title}</Text>
                <Text className="text-sm">{price}</Text>
            </View>
        </Pressable>
        <Pressable onPress={onRemove} className="self-start">
            <Image
                source={icons.remove}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </Pressable>
    </View>
  )
}

export default ProductHomeItem