import { Image, Text, View } from 'react-native';
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'

export default function App() {
  return (
    <SafeAreaView className="h-full">
        <View className="flex-1 items-center justify-center bg-white">
            <Image
                source={images.splash_image}
                className='w-full h-[200px]'
                resizeMode='contain'
            />
            <View className="items-center justify-center">
                <Text className="font-dmsemibold text-[40px]">You'll Find</Text>
                <Text className="font-dmsemibold text-[40px] text-[#FCA34D] underline">All you need</Text>
                <Text className="font-dmsemibold text-[40px]">Here!</Text>
            </View>
        </View>
        <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  )
}
