import { Text, Image, Pressable } from 'react-native'
import React from 'react'

const ProductHomeItem = ({ title, image, price, id, onPress }) => {
  return (
    <Pressable onPress={onPress} className="p-3 flex-1">
        <Image
            source={{ uri: image}}
            className="w-full h-[220px] rounded-lg"
            resizeMode='cover'
        />
        <Text className="mt-2 text-left text-xs text-gray-500">{title}</Text>
        <Text className="text-left text-xs">{price}</Text>
    </Pressable>
  )
}

export default ProductHomeItem