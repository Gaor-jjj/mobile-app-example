import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import categories from '../data/categories'

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {

  const renderItem = ({ item }) => {
    const isSelected = selectedCategory === item.id;
    
    return (
        <TouchableOpacity
            className="items-center my-4 mr-4"
            onPress={() => setSelectedCategory(item.id)}
        >
            {/* Square Icon Background */}
            <View className={`w-12 h-12 justify-center items-center mb-1 rounded-lg ${isSelected ? 'bg-gray' : 'bg-gray-200'}`}>
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
    <View className="w-full">
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