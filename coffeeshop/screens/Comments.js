import * as React from "react";
import { Text, View, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Info(props) {
    
    var renderCard = ({item}) => {

        return (
            <View style={{ flex:1, flexDirection: "row", margin: 10, backgroundColor: '#fff', padding: 10 }}>
                <Image style={{ width:85, height:85, marginRight: 10 }} source={{ uri: item.foto }} />
                <View style={{ maxWidth: 210 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>
                    <Text>{item.comentario}</Text>
                    <View  style={{display: 'flex', flexDirection:'row'}}>
                        {[...Array(item.estrelas)].map((el, index) => <Icon key={index} name="star" size={15} color="gold"/>)}
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={props.comentarios}
                renderItem={renderCard}
                keyExtractor={(item) => item.uid}
            />
        </View>
    )
}