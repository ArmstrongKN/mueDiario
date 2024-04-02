import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pagesApp/Home';
import Acesso from './Acesso';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();

export default function RotasAcesso() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Acesso" component={Acesso}  />
            <Stack.Screen name="Home"   component={Home}    />
        </Stack.Navigator>
    );

}
