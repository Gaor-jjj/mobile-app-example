import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import CategoryList from '../../components/CategoryList'
import products from '../../data/products'
import ProductHomeItem from '../../components/ProductHomeItem'

const home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === parseInt(selectedCategory) : true;
    const matchesKeyword = keyword ? product.title.toLowerCase().includes(keyword.toLowerCase()) : true;
    return matchesCategory && matchesKeyword;
  });
  
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
          showSearch
          title='Find All You Need'
          onSearchKeyword={setKeyword}
          keyword={keyword}
        />
        <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default home