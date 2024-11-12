import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import ListItem from '../../../components/ListItem'
import CustomButton from '../../../components/CustomButton'
import { useRouter } from 'expo-router'

const profile = () => {
  const router = useRouter();
  const num = 10
  
  const onLogout = () => {
    console.log('Logout is clicked')
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
        <ListItem title="My Listings" subtitle={`Already have ${num} listings`} onPress={() => router.push('/profile/createlisting')}/>
        <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={() => router.push('/(tabs)/profile/settings')}/>
        <CustomButton
          title="Add New Listing"
          handlePress
          containerStyles="mt-auto mb-5 bg-primary h-14"
          textStyles="font-mbold"
        />
      </View>
    </SafeAreaView>
  )
}

export default profile