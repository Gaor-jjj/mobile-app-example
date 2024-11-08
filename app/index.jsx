import { Image, Text, View } from 'react-native';
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-white">
        <View className="w-full items-center justify-center h-full p-5">
            <Image
                source={images.splash_image}
                className='w-full h-[200px]'
                resizeMode='contain'
            />
            <View className="items-center justify-center w-full">
                <Text className="font-dmsemibold text-[40px]">You'll Find</Text>
                <Text className="font-dmsemibold text-[40px] text-accent underline">All you need</Text>
                <Text className="font-dmsemibold text-[40px]">Here!</Text>
                <CustomButton
                    title='Sign Up'
                    handlePress={() => router.push('/sign-up')}
                    containerStyles='w-full mt-10 h-14'
                    textStyles='font-mbold'
                />
                <CustomButton
                    title='Sign In'
                    handlePress={() => router.push('/sign-in')}
                    containerStyles='w-full mt-4 bg-secondary h-14'
                    textStyles='font-mbold'
                />
            </View>
        </View>
    </SafeAreaView>
  )
}
