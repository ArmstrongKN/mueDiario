import React,{useState} from 'react';
import  {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Firebase from '../Firebase';

export default function addDiario({navigation,route}){
    const [texto,setTexto] = useState(route.params.texto);
    const [data,setData] = useState(route.params.data);
    const [local,setLocal] = useState(route.params.local);
    

    function AlterarDiario(id,titulo,local,data){
        Firebase.collection("diario").doc(id).update({
            titulo:titulo,
            texto:texto,
            data:data,
            local:local
            

        })
        Alert.alert("Aviso", "Diario alterado com sucesso.")
        navigation.navigate("Home")
        }
        return(
            <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Alterar o Titulo</Text>
            </View>
            <View>
                <TextInput autoCapitalize = 'words' style={estilo.input} placeholder='Digite o titulo'
                onChangeText={setDiario} value={diario}/>
                <TextInput style={estilo.input} placeholder="Digite seu texto" onChangeText={setTexto}
                value={texto}/>
                <TextInput style={estilo.input} placeholder="Digite seu local" onChangeText={setLocal}
                value={local}/>
                <TextInput style={estilo.input} placeholder="Digite a data" onChangeText={setData}
                value={data}/>
               <TouchableOpacity
                 style={estilo.btnenviar}
                 onPress={() => {
                AlterarDiario(id,titulo,local,data);
                 }}>
                 </TouchableOpacity>
            </View>
            </View>
          );
        }
 const estilo = StyleSheet.create({
   container: {
     flex:1, 
     justifyContent: 'center',
     alignItens: 'center',
    },
    input: {
      marginVertical: 10,
      marginHorizontal: 10,
      backgrounColor: '#9ac234',
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 15,
      borderRadius: 10,
    },
    btnenviar: {
       marginTop: 20,
    },
    btntxtenviar: {
       fontSize: 25,
    },
    titulo: {
       marginVertical: 40,
       fontSize: 25,
       textAlign: 'center'
},
});