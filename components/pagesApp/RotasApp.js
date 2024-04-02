import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import CadDiario from './CadDiario';
import AlterarDiario from './AlterarDiario';
 

const Stack = createStackNavigator();

export default function RotasApp() {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} option={{headerTintColor:'#9ac234'}} />
        <Stack.Screen name="CadDiario" component={CadDiario} option={{headerTintColor:'#9ac234', title:'Cadastro do diario'}}  />
        <Stack.Screen name="AlterarDiario" component={AlterarDiario} option={{headerTintColor:'#9ac234' , title: 'Alterar registros'}}    />
        </Stack.Navigator>
        </NavigationContainer>
    );

}