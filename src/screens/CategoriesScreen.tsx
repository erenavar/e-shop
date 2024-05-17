import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


interface ICategories  {
  categories:string[],
  pending:boolean,
  errorMsg:string
}

// const [categories, setCategories] = useState<ICategories>()



const CategoriesScreen = () => {
  const navigation:any = useNavigation();

  useEffect(() =>{
   
  },[])

  const fetchCategories = async () =>{
    const categories = fetch('https://fakestoreapi.com/products/categories');
    const categoriesJson = await (await categories).json();
    console.log(categoriesJson);
  }

  fetchCategories();


  return (
    <View>
      <Text>Deneme</Text>
      <Button title='Test' onPress={() => navigation.navigate("Products")} />
    </View>
  )
}

export default CategoriesScreen;