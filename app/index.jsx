import { Image, Text, View } from 'react-native';
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="h-full bg-white">
        <View className="w-full items-center justify-center min-h-[85vh] px-5">
            <Image
                source={images.splash_image}
                className='w-full h-[200px]'
                resizeMode='contain'
            />
            <View className="items-center justify-center w-full">
                <Text className="font-dmsemibold text-[40px]">You'll Find</Text>
                <Text className="font-dmsemibold text-[40px] text-[#FCA34D] underline">All you need</Text>
                <Text className="font-dmsemibold text-[40px]">Here!</Text>
                <CustomButton
                    title='Sign Up'
                    handlePress={() => router.push()}
                    containerStyles='w-full mt-10'
                />
                <CustomButton
                    title='Sign In'
                    handlePress={() => router.push()}
                    containerStyles='w-full mt-4'
                />
            </View>
        </View>
        <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  )
}
