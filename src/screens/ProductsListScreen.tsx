import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IProducts {
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:IRating;
}

interface IRating{
  rate:number;
  count:number;
}

const ProductsListScreen = ({route}) => {

const [products,setProducts] = useState<IProducts>();

  return (
    <View>
      <Text>{route.params.categoryName}</Text>
    </View>
  )
}

export default ProductsListScreen

const styles = StyleSheet.create({})