import React,{useState} from 'react';
import  {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Firebase from '../Firebase';

export default function AlterarDiario({navigation,route}){
    const id = route.parans.id;

    const [titulo,setTitulo] = useState(route.parans.titulo);
    const [local,setLocal] = useState(route.parans.local);
    const [data,setData] = useState(route.parans.data);

    function AlterarDiario(id,titulo,local,data){
        Firebase.collection("titulo").doc(id).update({
            titulo:titulo,
            local:local,
            data:data,

        })
        Alert.alert("Aviso", "Titulo alterado com sucesso.")
        navigation.navigate("Home")
        }
        return(
            <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Alterar dados do Titulo</Text>
            </View>
            <View>
                <TextInput autoCapitalize = 'words' style={estilo.input} placeholder='Digite o titulo'
                onChangeText={setDiario value={diario}/>
            </View>
        )
    }
}