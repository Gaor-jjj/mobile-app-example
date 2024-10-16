import { Tabs } from 'expo-router'
import { View, Image, Text } from 'react-native'
import { icons } from '../../constants'

const TabIcon = ({ icon, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                className="w-6 h-6"
            />
            <Text>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tabs.Screen
            name='home'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        icon={focused ? icons.home_focus : icons.home}
                        focused={focused}
                    />
                )
            }}
        />


    </Tabs>
  )
}

export default TabsLayout