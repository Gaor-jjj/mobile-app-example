import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { icons } from 'constants';

const ListItem = ({ title, subtitle, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center mt-5 bg-white rounded-md p-4"
      style={{
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
      }}
    >
      <View className="flex-row w-full items-center justify-between">
        <View style={{ justifyContent: subtitle ? 'flex-start' : 'center' }}>
          <Text className="text-primary font-nbold text-lg">{title}</Text>
          {subtitle ? (
            <Text className="text-gray-500 font-nregular text-xs">{subtitle}</Text>
          ) : null}
        </View>
        <Image source={icons.forward_simple} className="h-8 w-8" />
      </View>
    </Pressable>
  );
};

export default ListItem;
