import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';

export default function Products({navigation}) {
    const [produtos, setProdutos] = useState({});

    useEffect(() => {
        var getProdutos = async () => {
            const response = await axios.get('http://192.168.0.79:3031/produtos');
            setProdutos(response.data)
        }
        getProdutos()
        console.log('rodou')
    },[]);


    var renderCard = ({item}) => {
        return (
            <View style={styles.card}>
                <Image style={styles.img} source={{uri:item.img}}></Image>
                <View style={styles.info}>
                    <Text>{item.produto}</Text>
                    <Text style={styles.txt}>{item.preco}</Text>
                    <Button
                        onPress={() => navigation.navigate('ProductInfo', {info: item})}
                        title="Mais Informações"
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
      },
      img: {
          marginHorizontal: 15,
          width: 70,
          height: 70,
      },
      info: {
        margin: 10,
        padding: 10,
        minWidth: '57%',
      },
      txt: {
          marginBottom: 10,
          color:'brown'
      },
})