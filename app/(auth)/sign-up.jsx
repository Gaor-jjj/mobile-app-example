import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import InputField from '../../components/InputField'
import Checkbox from '../../components/Checkbox'
import CustomButton from '../../components/CustomButton'
import Seperator from '../../components/Seperator'
import GoogleLogin from '../../components/GoogleLogin'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
    const { setUser, setIsLoggedIn } = useGlobalContext();
    const [checked, setChecked] = useState(false)
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onSubmit = async () => {
        if(!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
        }
        try {
            const result = await createUser(form.email, form.password, form.username)
            setUser(result)
            setIsLoggedIn(true)
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }

  return (
    <SafeAreaView className="h-full bg-white">
        <ScrollView>
            <View className="w-full h-full p-5">
                <AuthHeader
                    title='Sign Up'
                    textStyles='font-mbold text-[26px]'
                    handlePress={() => router.push('/')}
                    containerStyles="mb-8"
                />
                <InputField
                    label='Name'
                    placeholder='John Doe'
                    value={form.username}
                    onChangeText={(e) => setForm({ ...form, username: e })}
                />
                <InputField
                    label='Email'
                    placeholder='example@gmail.com'
                    value={form.email}
                    onChangeText={(e) => setForm({ ...form, email: e })}
                />
                <InputField
                    label='Password'
                    placeholder='*******'
                    isPassword
                    value={form.password}
                    onChangeText={(e) => setForm({ ...form, password: e })}
                />
                <View className="flex-row items-center">
                    <Checkbox checked={checked} onCheck={setChecked}/>
                    <Text className="text-primary mx-3">I agree with <Text className="font-mbold">Terms & Privacy</Text></Text>
                </View>
                <CustomButton
                    title='Sign Up'
                    handlePress={onSubmit}
                    containerStyles='h-14 my-5'
                    textStyles='font-mbold'
                />
                <Seperator text='Or sign up with'/>
                <GoogleLogin handlePress={() => {}}/>
                <Text className="font-mregular text-primary text-center mt-5">Already have an account? <Text className="font-mbold" onPress={() => router.push('sign-in')}>Sign In</Text></Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp