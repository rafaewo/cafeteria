import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Info from '../components/Info'
import Comments from '../components/Comments'
import axios from 'axios'

const Tab = createBottomTabNavigator();

export default function ProductInfo(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    var getProduto = async (id) => {
      const response = await axios.get('http://192.168.0.79:3031/produtos/' + id);
      setProduto(response.data);
    }
    getProduto(props.route.params.info.id)
    console.log('uma vez')
  },[]);
  
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