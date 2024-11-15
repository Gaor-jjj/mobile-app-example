import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const Mylisting = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="bg-white flex-1" edges={['top']}>
        <View className="flex-1 mx-5 mt-5">
            <Header
                title='My Listings'
                showBack
                onBackPress={() => router.back()}
            />
        </View>
        </SafeAreaView>
    )
}

export default Mylisting