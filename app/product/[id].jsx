import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ProductDetails = () => {
  const { title, image, price, description } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-1/2">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="h-1/2 p-5">
        <ScrollView>
          <Text className="text-lg font-bold mb-2 text-gray-800">{title}</Text>
          <Text className="text-md font-semibold text-gray-600 mb-4">{price}</Text>
          <Text className="text-sm text-gray-700">{description}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
