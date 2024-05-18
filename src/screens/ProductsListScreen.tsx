import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductsListScreen = ({route}) => {

  return (
    <View>
      <Text>{route.params.categoryName}</Text>
    </View>
  )
}

export default ProductsListScreen

const styles = StyleSheet.create({})