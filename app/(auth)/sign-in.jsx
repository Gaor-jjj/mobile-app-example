import { View, Text, ScrollView } from 'react-native'
import AuthHeader from '../../components/AuthHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import Seperator from '../../components/Seperator'
import GoogleLogin from '../../components/GoogleLogin'

const SignUp = () => {
  return (
    <SafeAreaView className="h-full bg-white">
        <ScrollView>
            <View className="w-full h-full p-5">
                <AuthHeader
                    title='Sign In'
                    textStyles='font-mbold text-[26px]'
                    handlePress={() => router.push('/')}
                    containerStyles="mb-8"
                />
                <InputField
                    label='Email'
                    placeholder='example@gmail.com'
                />
                <InputField
                    label='Password'
                    placeholder='*******'
                    isPassword
                />
                <CustomButton
                    title='Sign In'
                    handlePress={() => router.push('/home')}
                    containerStyles='h-14 my-5'
                    textStyles='font-mbold'
                />
                <Seperator text='Or sign in with'/>
                <GoogleLogin handlePress={() => router.push('/home')}/>
                <Text className="font-mregular text-primary text-center mt-5">Don't have an account? <Text className="font-mbold text-primary" onPress={() => router.push('sign-up')}>Sign Up</Text></Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp