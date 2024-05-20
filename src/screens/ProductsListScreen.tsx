import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Card from '../components/Card';


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
  products: IProducts[],
  pending:boolean,
  errorMsg:string
}

const ProductsListScreen = ({route,navigation}) => {

  const [data,setData] = useState<IFetchedData>({
    products:[],
    pending:false,
    errorMsg:""

  });


 

  useEffect(() => {
    fetchProducts();
  },[])

  const fetchProducts = async () => {
    try {
      setData((prevState) => ({
        ...prevState,
        pending:true,
        errorMsg:""
      }))
      
      const products = await fetch('https://fakestoreapi.com/products');
      const productsJson = await products.json();

      if(productsJson.length !=null){
        setData((oldPrev) =>({
          ...oldPrev,
          products: productsJson,
          pending:false
        }))
      }
    } catch (error) {
      console.log("Error :",error);
    }
  }

    const filteredProducts = data.products.filter((item) => item.category == route.params.categoryName);
    const test = (id) => navigation.navigate("Details",{productId: id})

  return (
    <View style={styles.container}>
        <FlatList
          data={filteredProducts}
          renderItem={({item}) => {
            return <Card img={item.image} description={item.description} price={item.price} test={() => test(item.id)} />
          }}
          keyExtractor={(item,index)=> index.toString()}
          horizontal={false}
          numColumns={2}
        />
    </View>
  )
}

export default ProductsListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})