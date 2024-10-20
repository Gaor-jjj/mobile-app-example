import { Text, Image, Pressable } from 'react-native'
import React from 'react'

const ProductHomeItem = ({ title, image, price, onPress }) => {
  return (
    <Pressable onPress={onPress} className="p-3">
        <Image
            source={{ uri: image}}
            className="w-full h-32 rounded-lg"
            resizeMode='cover'
        />
        <Text className="mt-2 text-left">{title}</Text>
        <Text className="text-left">{price}</Text>
    </Pressable>
  )
}

export default ProductHomeItem