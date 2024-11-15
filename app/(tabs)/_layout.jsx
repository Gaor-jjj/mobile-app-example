import { Tabs } from 'expo-router'
import { View, Image } from 'react-native'
import { icons } from 'constants'

const TabIcon = ({ icon, name, focused }) => {
    return (
        <View className="items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                className="h-6 w-6"
            />
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
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        icon={focused ? icons.home_focus : icons.home}
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='favourites'
            options={{
                title: 'Favourites',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        icon={focused ? icons.favourites_focus : icons.favourites}
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        icon={focused ? icons.profile_focus : icons.profile}
                        focused={focused}
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout