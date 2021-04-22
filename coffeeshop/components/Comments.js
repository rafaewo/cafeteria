import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View, Image, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Comments(props) {
    const [comentario, setComentario] = useState([])
    
    useEffect(() => {
        var getComentario = async (id) => {
            const response = await axios.get(`http://192.168.0.79:3031/produtos/${id}/comentarios`)
            response.data != undefined ? setComentario(response.data) : console.log('undefined') 
        }
        getComentario(props.id)
    })

    const deleteComment = async (id, idcomment) => {
        console.log('clicou')
        const response = await axios.delete(`http://192.168.0.79:3031/produto/${id}/comentario/${idcomment}`)
        return response.data
    }
    
    var renderCard = ({item}) => {

        return (
            <View style={{ flex:1, flexDirection: "row", margin: 10, backgroundColor: '#fff', padding: 10, borderWidth: 1, borderColor: '#e1e1e1' }}>
                <Image style={{ width:85, height:85, marginRight: 10 }} source={{ uri: item.foto }} />
                <View style={{ maxWidth: 210 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>
                    <Text style={{ width: 210 }}>{item.comentario}</Text>
                    <View  style={{display: 'flex', flexDirection:'row'}}>
                        {[...Array(item.estrelas)].map((el, index) => <Icon key={index} name="star" size={15} color="gold"/>)}
                    </View>
                </View>
                <Icon name="trash-outline" size={15} color="brown" onPress={() => deleteComment(props.id,item.uid)}/>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:15 }}>
            <FlatList
                data={comentario}
                renderItem={renderCard}
                keyExtractor={(comentario) => comentario.uid.toString()}
                style={{marginBottom: 10}}
            />
            <Button onPress={() => props.nav.navigate('AddComment', {id: props.id})} title='Adicionar Comentário' />
        </View>
    )
}