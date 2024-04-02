import React,{useState} from 'react';
import  {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Firebase from '../Firebase';

export default function CadDiario({navigation}){
     

    const [titulo,setTitulo] = useState(null);
    const [texto,setTexto] = useState(null);
    const [local,setLocal] = useState(null);
    const [data,setData] = useState(null);

    function addTitulo() {
        Firebase.collection("titulo").add({
            titulo:titulo,
            texto:texto,
            local:local,
            data:data,
        })
        Alert.alert("Cadastro", "Titulo cadastrado com sucesso.");
        navigation.navigate("Home");
        }
        return(
            <View style={estilo.container}>
              <View>
                  <Text style={estilo.titulo}>Registre seu Diário</Text>
              </View>
              
                  <TextInput autoCapitalize = 'words' style={estilo.input} placeholder='Digite o titulo'
                  onChangeText={setDiario} value={diario}/>
                  <TextInput style={estilo.input} placeholder="Digite o seu dia" onChangeText={setTexto}
                  value={texto}/>
                  <TextInput style={estilo.input} placeholder="Digite a data" onChangeText={setData}
                  value={data}/>
                  <TextInput style={estilo.input} placeholder="Digite seu local" onChangeText={setLocal}
                  value={local}/>

                  <TouchableOpacity
                  style={estilo.btnenviar}
                  onPress={() => {
                  addDiario();
                  }}>
                      <Text style={estilo.btntxtenviar}> Alterar </Text>
                  </TouchableOpacity>
             
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