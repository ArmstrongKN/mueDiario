
import { useState, useEffect } from "react";
import{ Text, TextInput, View, TouchableOpacity,StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged,  signInWithEmailAndPassword } from "firebase/auth";
import {initializeApp} from 'firebase/app'
import{ Firebase } from '../firebase';
import { initialize } from "firebase/app";

export default function Acesso({navigation}){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');
    const app = initializeApp(Firebase);
    const auth = getAuth(app);
    

function login(){
    signInWithEmailAndPassword(auth,email,senha).catch(
    function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode,errorMessage);
    }
  )
}

useEffect(()=>{
    onAuthStateChanged(auth,function(user){
        setUser(user);
        if(initializeApp) setInitializing(false);
    });
},[])

if(user){
    return NavigationPreloadManager.navigate('Home')
}

    return(
    <View styles={styles.container}>
      <Text>Acesso ao Diário!</Text>
      <TextInput
      style={styles.textoInput}
      placeholder="Digite o email"
      onChange={(email)=>setEmail()}
      value={email}
      /> 
      <TextInput
      style={styles.textoInput}
      placeholder="Digite a senha"
      onChange={(senha)=>setSenha()}
      value={senha}
      /> 

      <TouchableOpacity
      style={styles.botao}
      onPress={()=>{
        login();
      }}>
      <Text style={styles.botaotexto}>Logar</Text>
      </TouchableOpacity>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoInput:{
      width:300,
      backgroundColor:'#0000CD',
      color: '#fff',
      fontSize: 19,
      marginTop: 20,
      borderRadios: 10
    },
    Titulo:{
        fontSize:40
    },
    botao:{
        width: 50,
        backgroundColor: '#FF0000',
        height: 50,
        allignItens: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadios: 150
    },
    botaotexto:{
        color:'#fff',
        fontSize:30
    }
});