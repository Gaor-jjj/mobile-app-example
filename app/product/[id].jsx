import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Pressable, FlatList, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants'
import { useRouter } from 'expo-router';

const ProductDetails = () => {
  const router = useRouter();
  const { title, image, price, description, images } = useLocalSearchParams();

  // Convert the 'images' string into an array
  const imagesArray = images ? images.split(',') : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const renderImageItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item }}
        style={{ width: screenWidth, height: '100%' }}
        resizeMode="cover"
        onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
      />
    );
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1">
          <View className="flex-1">
            {images && images.length > 0 ? (
              <>
                <FlatList
                  data={imagesArray}
                  horizontal
                  renderItem={renderImageItem}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  onViewableItemsChanged={onViewableItemsChanged}
                  viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                />
                <View className="flex-row justify-center absolute bottom-4 w-full">
                  {imagesArray.map((_, index) => (
                    <View
                      key={index}
                      className={`w-2 h-2 rounded-full mx-1 ${
                        index === currentIndex ? 'bg-white' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </View>
              </>
            ) : (
              // Single image if no 'images' array exists
              <Image
                source={{ uri: image }}
                className="w-full h-full"
                resizeMode="cover"
              />
            )}
          </View>
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 bg-white rounded-lg justify-center items-center ml-5 mt-5 absolute"
          >
            <Image source={icons.back_simple} className="h-7 w-7"/>
          </Pressable>
          <View className="h-full p-5 rounded-t-3xl bg-white mt-[-30px] flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <Text className="text-xl font-nbold my-4">{title}</Text>
              <Text className="text-3xl font-nbold mb-4">{price}</Text>
              <Text className="text-sm font-nregular text-gray-500">{description}</Text>
            </ScrollView>
            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                onPress={() => {}}
                className="w-14 h-14 bg-gray-200 rounded-lg justify-center items-center mr-4"
              >
                <Image source={icons.favourites_focus} className="h-7 w-7"/>
              </TouchableOpacity>
              <CustomButton
                title="Contact Seller"
                handlePress={() => {}}
                containerStyles="flex-1 mt-auto bg-primary h-14"
                textStyles="font-mbold"
              />
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default ProductDetails;