import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import ListItem from '../../../components/ListItem'
import CustomButton from '../../../components/CustomButton'
import { useRouter } from 'expo-router'
import { useGlobalContext } from '../../../context/GlobalProvider'
import { signOut } from '../../../lib/appwrite'

const profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const router = useRouter();
  const num = 10
  
  const onLogout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace('/sign-in')
  }

  return (
    <SafeAreaView className="bg-white flex-1" edges={['top']}>
      <View className="flex-1 mx-5 mt-5">
        <Header
          title='Profile'
          showLogout
          onLogoutPress={onLogout}
        />
        <Text className="font-nbold mb-2 text-xl">Username</Text>
        <Text className="font-nregular text-sm text-gray-500">Email</Text>
        <ListItem title="My Listings" subtitle={`Already have ${num} listings`} onPress={() => {}}/>
        <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={() => router.push('/(tabs)/profile/settings')}/>
        <CustomButton
          title="Add New Listing"
          containerStyles="mt-auto mb-5 bg-primary h-14"
          textStyles="font-mbold"
          handlePress={() => router.push('/profile/createlisting')}
        />
      </View>
    </SafeAreaView>
  )
}

export default profile