import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    img:string
    description:string,
    price:string
}

export default function Card(props:IProps) {
  return (
    <View>
      <Text>Card</Text>
      <Text>{props.img}</Text>
      <Text>{props.description}</Text>
      <Text>{props.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})