import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons'

const Header = ({ title, showBack, showLogout, showSearch, onBackPress, onLogoutPress, onSearchPress }) => {
  return (
    <View className="flex-row items-center justify-between w-full">

      {/* Left Side: Either Back or Search */}    
      <View className="w-10">
        {showBack ? (
            <TouchableOpacity onPress={onBackPress}>
                <Image source={icons.back_simple} className="w-6 h-6"/>
            </TouchableOpacity>
        ) : showSearch ? (
            <TouchableOpacity onPress={onSearchPress}>
                <Image source={icons.search} className="w-6 h-6"/>
            </TouchableOpacity>
        ) : null}
      </View>

      {/* Title */}      
      <Text className="font-mbold text-[16px]">{title}</Text>

      {/* Right Side: Logout */}      
      <View className="w-10">
        {showLogout && (
            <TouchableOpacity onPress={onLogoutPress}>
                <Image source={icons.logout} className="w-6 h-6"/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Header