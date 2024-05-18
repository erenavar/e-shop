import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IRating{
  rate:number;
  count:number;
}

interface IProducts {
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:IRating;
}

interface IFetchedData{
  products: IProducts,
  pending:boolean,
  errorMsg:string
}

const ProductsListScreen = ({route}) => {
  
  const [data,setData] = useState<IFetchedData>(null);

  return (
    <View>
      <Text>{route.params.categoryName}</Text>
    </View>
  )
}

export default ProductsListScreen

const styles = StyleSheet.create({})