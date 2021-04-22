import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View, Text, Image, FlatList } from 'react-native';
import axios from 'axios'

export default function AddComment(props) {
    const [text, onChangeText] = useState("");
    const [stars, onChangeStars] = useState();
    const productId = props.route.params.id
    
    var postComment = async(comentario) => {  
        const response = await axios.post(`http://192.168.0.79:3031/produto/${productId}/comentario`, comentario)
        return response.data
    }
        
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.view}>
                <Text>Escreva seu comentário:</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
                <Text>Estrelas:</Text>
                <TextInput style={styles.input} onChangeText={onChangeStars} value={stars}/>
            </View>
            <Button title="submeter" onPress={() => postComment({
                nome: 'Usuário',
                foto: 'https://images.unsplash.com/photo-1479707777933-ed7ef62bac52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
                comentario: text,
                estrelas: stars
            })} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    view: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#e1e1e1'
    },
    input: {
        height: 40,
        borderWidth: 1,
        margin: 12,
        paddingLeft: 5
    },
  });