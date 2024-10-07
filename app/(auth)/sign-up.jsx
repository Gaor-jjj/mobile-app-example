import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import InputField from '../../components/InputField'
import Checkbox from '../../components/Checkbox'
import CustomButton from '../../components/CustomButton'
import Seperator from '../../components/Seperator'

const SignUp = () => {
    const [checked, setChecked] = useState(false)

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
            <View className="flex-row items-center">
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text className="text-primary mx-3">I agree with <Text className="font-mbold">Terms & Privacy</Text></Text>
            </View>
            <CustomButton
                title='Sign In'
                handlePress={() => router.push('/')}
                containerStyles='mt-5'
            />
            <Seperator text='Or sign up with'/>
        </View>
    </SafeAreaView>
  )
}

export default SignUp