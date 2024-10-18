import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const categories = ['Popular', 'Chair', 'Table', 'Armchair', 'Bed', 'Lamp']

const CategoryList = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
        className="justify-center items-center mx-4 h-10"
        onPress={() => {
            console.log(`Selected category: ${item}`);
        }}
    >
        <View>
            <Image/>
        </View>
        <Text>{item}</Text>
    </TouchableOpacity>
  )  

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoryList