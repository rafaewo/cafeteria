import * as React from "react";
import { Text, View, Image } from 'react-native';

export default function Info(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image style={{ width:150, height:150 }} source={{ uri: props.img }} />
      <Text style={{ fontSize:20 }}>{props.produto}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color:'brown', margin: 10 }}>{props.preco}</Text>
      <Text style={{ fontSize: 16 }}>Descrição:</Text>
      <Text style={{ fontSize:15, textAlign:'auto', margin:15, paddingHorizontal:15 }}>{props.descricao}</Text>
    </View>
  );
}