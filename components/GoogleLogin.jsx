import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const GoogleLogin = ({handlePress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress} className="bg-secondary rounded-lg self-center justify-center items-center w-[45%] p-4">
        <Image source={icons.google} className="w-8 h-8"/>
    </TouchableOpacity>
  )
}

export default GoogleLogin