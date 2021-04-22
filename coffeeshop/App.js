import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductInfo from './screens/ProductInfo';
import Products from './screens/Products';
import AddComment from './components/AddComment'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" options={{ title: 'Cafeteiras' }} component={Products} />
        <Stack.Screen name="ProductInfo" options={{ title: 'Informações' }} component={ProductInfo} />
        <Stack.Screen name="AddComment" options={{ title: 'Adicionar Comentário' }} component={AddComment} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}