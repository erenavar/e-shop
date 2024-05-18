import React, { useEffect,useState } from 'react'
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
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
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories?.categories}
        renderItem={({item}) => 
          <Pressable 
            onPress={() => alert("test")}
            style={styles.categoriesStyle} 
          >
              <Text style={styles.categoriesText} >{item}</Text>
          </Pressable>}
          keyExtractor={(item, index) => index.toString()} 
        />
  
    </View>
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center"
  },
  categoriesStyle:{
    flex:1,
    backgroundColor:"lightgray",
    margin:"5%",
    textAlign:"center",
    borderRadius:20,
    width: 300,
    padding:"10%",
    justifyContent:"center",
    alignItems:"center"
  },
  categoriesText: {
    textTransform: "uppercase"
  }
}) 