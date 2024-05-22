import React,{useEffect, useState} from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'


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

  const image = {uri: details.productDetails?.image};
  return (
    <View style={styles.container}>
      <View style= {styles.imageContainer} >
       <ImageBackground style={styles.image} source={image} resizeMode="contain"/>

      </View>
        
    <View style={styles.textContainer}>
      <Text style={styles.title}>{details.productDetails?.title}</Text>
      <Text style={styles.price}>${details.productDetails?.price}</Text>
      <Text>{details.productDetails?.description}</Text>
    </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  imageContainer: {
    backgroundColor:"white",
    paddingTop:"10%"
  },
  image:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:300,
    backgroundColor:"red",
    marginBottom:"90%" 
  },
  textContainer: {
    gap: 15,
    paddingTop:20
  },
    title: {
    fontWeight:"bold",
    fontSize:16
  },
  price: {
    color: "darkblue",
    fontWeight:"bold",
    fontSize:20
  }
})