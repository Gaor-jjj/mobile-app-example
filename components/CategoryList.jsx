import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

const categories = [
  { name: 'Popular', icon: icons.star },
  { name: 'Chair', icon: icons.chair },
  { name: 'Table', icon: icons.table },
  { name: 'Armchair', icon: icons.armchair },
  { name: 'Bed', icon: icons.bed },
  { name: 'Lamp', icon: icons.lamp },
]

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedCategory === item.name;

    return (
        <TouchableOpacity
            className="items-center my-4 mr-4"
            onPress={() => setSelectedCategory(item.name)}
        >
            {/* Square Icon Background */}
            <View className={`w-14 h-14 justify-center items-center mb-1 rounded-lg ${isSelected ? 'bg-gray' : 'bg-gray-200'}`}>
                <Image
                    source={item.icon}
                    className="w-6 h-6"
                    resizeMode="contain"
                />
            </View>
            {/* Category Name */}
            <Text className={`text-xs font-nregular ${isSelected ? 'text-primary' : 'text-gray-400'}`}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );
  };


  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoryList