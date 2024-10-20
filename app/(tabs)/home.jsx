import { View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import CategoryList from '../../components/CategoryList'
import products from '../../data/products'
import ProductHomeItem from '../../components/ProductHomeItem'

const home = () => {
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
    <SafeAreaView className="bg-white flex-1">
      <View className="w-full h-full flex-1 items-center p-5">
        <Header
          showSearch
          title='Find All You Need'
        />
        <CategoryList/>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  )
}

export default home