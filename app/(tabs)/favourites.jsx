import { View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import products from '../../data/products'
import ProductHomeItem from '../../components/ProductFavoriteItem'

const favorites = () => {
  
  const renderProductItem = ({item}) => {
    return (
      <ProductHomeItem
        title={item.title}
        image={item.image}
        price={item.price}
      />
    )
  }

  return (
    <SafeAreaView className="bg-white flex-1" edges={['top']}>
      <View className="flex-1 mx-5 mt-5">
        <Header
          title='Favorites'
        />
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default favorites