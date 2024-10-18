import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import CategoryList from '../../components/CategoryList'

const home = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="w-full h-full items-center p-5">
        <Header
          showSearch
          title='Find All You Need'
        />
        <CategoryList/>
      </View>
    </SafeAreaView>
  )
}

export default home