import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailsScreen = ({route}) => {
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{route.params.productId}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})