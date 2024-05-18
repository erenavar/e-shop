import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProductsListScreen from '../screens/ProductsListScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleStyle:{fontSize:20},headerBackTitle:"Back",headerTitleStyle:{fontSize:30}}}>
        <Stack.Screen name="Category" component={CategoriesScreen}/>
        <Stack.Screen name="Products" component={ProductsListScreen} options={{title:"PRODUCTS"}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:"DETAILS"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;