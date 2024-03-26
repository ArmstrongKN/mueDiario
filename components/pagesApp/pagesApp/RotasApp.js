import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, createStackNavigator} from '@react-navigation/native';
import Home from './Home';
import CadDiario from './CadDiario';
import AlterarDiario from './AlterarDiario';
import Home from '../pagesApp/Home';
import Acesso from './Acesso';

const Stack = createStackNavigator();

export default function RotasApp() {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"   component={Home} option={{headerTintColor:'#9ac234'}}    />
            <Stack.Screen name="CadDiario" component={Acesso}  />
            <Stack.Screen name="AlterarDiario"   component={Home} option={{headerTintColor:'#9ac234'}}    />
        </Stack.Navigator>
        </NavigationContainer>
    );

}