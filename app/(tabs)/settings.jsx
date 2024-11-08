import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import ListItem from '../../components/ListItem'

const settings = () => {
    return (
        <SafeAreaView className="bg-white flex-1" edges={['top']}>
        <View className="flex-1 mx-5 mt-5">
            <Header
            title='Settings'
            showBack
            onBackPress
            />
        </View>
        </SafeAreaView>
    )
}

export default settings