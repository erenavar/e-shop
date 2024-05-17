import React, { useEffect,useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


interface ICategories  {
  categories:string[] | null,
  pending:boolean,
  errorMsg:string
}

interface Iid  {
  id:number
}




const CategoriesScreen = () => {
  const [categories, setCategories] = useState<ICategories>()
  const navigation:any = useNavigation();

  useEffect(() =>{
  fetchCategories();

  },[])

  const fetchCategories = async () =>{
    try {
      setCategories((prevState) => ({
        ...prevState,
        pending:false,
        errorMsg:""
      }));
      const categories = await fetch('https://fakestoreapi.com/products/categories');
      const categoriesJson = await categories.json();

      setCategories((prevState) =>({
        ...prevState,
        categories : categoriesJson,
        pending:false,
        errorMsg:""
   
      }));


    } catch (err) {
      console.log("Error :", err)
    }
    console.log(categories.categories)
  }





  return (
    <View>
      <Text>Deneme</Text>
      <Button title='Test' onPress={() => navigation.navigate("Products")} />
      <FlatList
        data={categories.categories}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  )
}

export default CategoriesScreen;