import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Info from './Info'
import Comments from './Comments'
import { getProduto } from '../service/Produtos'

const Tab = createBottomTabNavigator();

export default function ProductInfo(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    let isMounted = true;
    async function loadContent() {
      const produto = await getProduto(props.route.params.info.id)
      if (isMounted) setProduto(produto)
    }
    loadContent()
    return () => { isMounted = false }
  });
  
  return (
    <NavigationContainer independent={true}>
      
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: 'Informação do Método',
            tabBarIcon: ({ color, size }) => <Ionicons name='information-circle-outline' size={size} color={color} />
          }}
          name="Info"
        >
          {() => <Info {...produto} />}
        </Tab.Screen>
        <Tab.Screen 
          options={{
            title: 'Comentários',
            tabBarIcon: ({ color, size }) => <Ionicons name='chatbox-ellipses-outline' size={size} color={color} />
          }}
          name="Comments"
        >
          {() => <Comments {...produto} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}