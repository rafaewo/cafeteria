import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Comments from '../components/Comments';

const Stack = createStackNavigator();

export default function CommentScreen(props) {
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Comments" options={{ title: 'Comentários', headerShown: false }}>
          {() => <Comments id={props.idProduto} nav={props.nav} />}
        </Stack.Screen>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}