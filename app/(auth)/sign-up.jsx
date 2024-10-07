import { View, Text } from 'react-native'
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import InputField from '../../components/InputField'

const SignUp = () => {
  return (
    <SafeAreaView className="h-full bg-white">
        <View className="w-full h-full p-5">
            <AuthHeader
                title='Sign Up'
                textStyles='font-mbold text-[26px]'
                handlePress={() => router.back()}
                containerStyles="mb-[54px]"
            />
            <InputField
                label='Name'
                placeholder='John Doe'
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
        </View>
    </SafeAreaView>
  )
}

export default SignUp