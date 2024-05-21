import React,{useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


interface IRating{
  rate:number,
  count:number
}

interface IAllDetails {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:IRating
}

interface IDetails{
  productDetails:IAllDetails|null,
  pending:boolean,
  errorMsg:string
}

const DetailsScreen = ({route}) => {
  const [details,setDetails] = useState<IDetails>({
    productDetails:null,
    pending:false,
    errorMsg:""
  });

  useEffect(() => {
    fetchDetails()
  },[])

  const fetchDetails = async () =>  {
    try {
      setDetails((prevState) =>({
        ...prevState,
        productDetails:null,
        pending:false,
        errorMsg:""
      }))
  
      const fetchedDetails = await fetch("https://fakestoreapi.com/products/"+route.params.productId);
      const fetchDetailsJson = await fetchedDetails.json();
  
      setDetails((prevState) =>({
        ...prevState,
        productDetails : fetchDetailsJson,
        pending:false,
  
      }))
      
    } catch (error) {
      console.log("Error:",error)
    }
   

  }

  console.log(details.productDetails)
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{route.params.productId}</Text>
      <Text>{details.productDetails?.title}</Text>
      <Text>{details.productDetails?.price}</Text>
      <Text>{details.productDetails?.description}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})