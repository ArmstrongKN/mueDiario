import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pagesApp/Home';
import Acesso from './Acesso';
import Acesso from './Cadastro';

const Stack = createStackNavigator();

export default function RotasAcesso() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Acesso" component={Acesso}  />
            <Stack.Screen name="Cadastro"   component={Cadastro}    />
        </Stack.Navigator>
    );

}
