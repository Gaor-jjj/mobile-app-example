import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="w-full h-full items-center justify-center p-5">
        <Text>Welcome to the profile page!</Text>
      </View>
    </SafeAreaView>
  )
}

export default profile