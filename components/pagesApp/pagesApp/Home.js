import React, {useState, useEffect} from 'react';
import { Firebase } from '../Firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
export default function Home({navigation}) {
  const [diario, setDiario] = useState([]);
  function deleteDiario(id){
    Firebase.collection("diario").doc(id).delete();
    Alert.alert("O diario foi Deletado.");
  }
  useEffect(()=>{
    Firebase.collection("diario").onSnapshot((query)=>{
      const
    })
  }
  )
  return (
    <View style={styles.container}>
      <Text>Meu Diário</Text>
      <Text>Data: 11/03/2024</Text>
      <Text>Palavra: Codar</Text>
      <Text>Hoje é um lindo dia que se inicia com muita codação...Eu amo codar...Codo o dia todo sem parar</Text>
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
});
