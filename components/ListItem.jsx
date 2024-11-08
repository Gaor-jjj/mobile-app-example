import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const ListItem = ({title, subtitle, onPress}) => {
  return (
    <Pressable onPress={onPress} className="flex-row items-center mt-5 bg-white shadow-sm rounded-md p-4">
        <View className="flex-row w-full items-center justify-between">
            <View>
                <Text className="text-primary font-nbold text-lg">{title}</Text>
                <Text className="text-gray-500 font-nregular text-xs">{subtitle}</Text>
            </View>
            <Image source={icons.forward_simple} className="h-8 w-8"/>
        </View>
    </Pressable>
  )
}

export default ListItem