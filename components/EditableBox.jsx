import { View, Text, TextInput } from 'react-native'
import React from 'react'

const EditableBox = ({ label, value, onChangeText, editable }) => {
  return (
    <View className="mt-5 bg-white rounded-md p-4" style={{
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
      }}>
      <Text className="text-gray-500 font-nregular mb-2">{label}</Text>
      <TextInput className="text-primary font-nbold" editable={editable} value={value} onChangeText={onChangeText}/>
    </View>
  )
}

export default EditableBox