import { View, Text, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const ProductDetails = () => {
  const { title, image, price, description } = useLocalSearchParams();

  return (
    <View className="flex-1 p-5 bg-white">
      <Image
        source={{ uri: image }}
        className="w-full h-64 rounded-lg"
        resizeMode="cover"
      />
      <Text className="mt-5 text-xl font-semibold">{title}</Text>
      <Text className="mt-2 text-lg text-gray-600">{price}</Text>
      <Text className="mt-4 text-sm text-gray-500">{description}</Text>
    </View>
  );
};

export default ProductDetails;
