import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProductsListScreen from '../screens/ProductsListScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={CategoriesScreen} options={{title: "CATEGORIES"}} />
        <Stack.Screen name="Products" component={ProductsListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;