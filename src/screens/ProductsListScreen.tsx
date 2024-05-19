import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

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
const ProductsListScreen = ({route}) => {
  
  
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

      if(productsJson.length > 1){
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

  if (data) {
    console.log(data.products);
  }




  return (
    <View>
      <Text>"deneme"</Text>
      <Text>{route.params.categoryName}</Text>
    </View>
  )
}

export default ProductsListScreen
