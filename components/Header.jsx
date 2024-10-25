import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'
import InputField from './InputField'

const Header = ({ title, showBack, showLogout, showSearch, onBackPress, onLogoutPress, onSearchKeyword, keyword }) => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
  }

  return (
    <View className="w-full">
      <View className="flex-row items-center justify-between">

        {/* Left Side: Either Back or Search */}    
        <View className="w-10">
          {showBack ? (
              <TouchableOpacity onPress={onBackPress}>
                  <Image source={icons.back_simple} className="w-6 h-6"/>
              </TouchableOpacity>
          ) : showSearch ? (
              <TouchableOpacity onPress={toggleSearch}>
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
      {showSearchInput && (
        <View className="mt-2">
          <InputField onChangeText={onSearchKeyword} value={keyword} placeholder={`Type your keyword`}/>
        </View>
      )}
    </View>
  )
}

export default Header