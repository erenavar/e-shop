import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface IProps {
    img:string
    description:string,
    price:number
}



export default function Card(props:IProps) {
  return (
    <Pressable style={styles.container} onPress={() => alert("test")}>
        <View style={styles.imgWrapper}>
        <Image
            style={styles.images}
            source={{uri:props.img}}       
            />
        </View>
       
     
      <Text style={styles.desc}  numberOfLines={2}>{props.description}</Text>
      <Text style={styles.prices}>${props.price}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightgray",
        width:"46%",
        padding:"2%",
        marginHorizontal:"2%",
        marginBottom:"3%",
        borderRadius: 10
    },
    imgWrapper:{
        backgroundColor:"white",
        marginVertical:"3%"
    },
    images:{
        padding:80,
        resizeMode: 'contain'
    },
    desc:{
        fontWeight:"bold",
        fontSize:16,
        marginVertical:10
    },
    prices:{
        color:"blue",
        fontSize:25,
        fontWeight:"bold",
        marginVertical:6

    }
})