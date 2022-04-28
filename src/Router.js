import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './pages/First';
import Secound from './pages/Second';

const Stack = createNativeStackNavigator();

function App() {
return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='FirstScreen' component={First} />
                <Stack.Screen name='SecoundScreen' component={Secound} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
