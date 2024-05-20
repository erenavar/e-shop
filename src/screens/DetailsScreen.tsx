import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'


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
  productDetails:IDetails[]|null,
  pending:boolean,
  errorMsg:string
}

const DetailsScreen = ({route}) => {
  const [details,setDetails] = useState<IDetails>({
    productDetails:[],
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
        productDetails:[],
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
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})