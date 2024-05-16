import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'



const CategoriesScreen = () => {
  const navigation:any = useNavigation();

  return (
    <View>
      <Text>Deneme</Text>
      <Button title='Test' onPress={() => navigation.navigate("Products")} />
    </View>
  )
}

export default CategoriesScreen;