import { View, Text } from 'react-native'
import React from 'react'

const Seperator = ({text}) => {
  return (
    <View className="flex-row items-center my-5">
      <View className="bg-lgray h-[1px] flex-1 mx-2"/>
      <Text className="text-primary font-mbold">{text}</Text>
      <View className="bg-lgray h-[1px] flex-1 mx-2"/>
    </View>
  )
}

export default Seperator