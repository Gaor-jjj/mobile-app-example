import { View, Text, ScrollView, Alert } from 'react-native'
import AuthHeader from '../../components/AuthHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import Seperator from '../../components/Seperator'
import GoogleLogin from '../../components/GoogleLogin'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
import { useState } from 'react'

const SignUp = () => {
    const { setUser, setIsLoggedIn } = useGlobalContext();

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const onSubmit = async () => {
        if(!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
        }
        try {
            await signIn(form.email, form.password)
            const result = await getCurrentUser();
            setUser(result);
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
                    title='Sign In'
                    textStyles='font-mbold text-[26px]'
                    handlePress={() => router.push('/')}
                    containerStyles="mb-8"
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
                    onChangeText={(e) => setForm({ ...form, password: e  })}
                />
                <CustomButton
                    title='Sign In'
                    handlePress={onSubmit}
                    containerStyles='h-14 my-5'
                    textStyles='font-mbold'
                />
                <Seperator text='Or sign in with'/>
                <GoogleLogin handlePress={() => {}}/>
                <Text className="font-mregular text-primary text-center mt-5">Don't have an account? <Text className="font-mbold text-primary" onPress={() => router.push('sign-up')}>Sign Up</Text></Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp