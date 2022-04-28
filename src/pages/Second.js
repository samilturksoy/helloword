import React from 'react';
import { Text,SafeAreaView,Button } from 'react-native';

function Secound(props) {
    const user=props.route.params.userName;
    function backToFirst() {
        props.navigation.goBack();
    }
    
    return(
        <SafeAreaView>
            <Text>Hello {user}</Text>
            <Button title='Go BAck' onPress={backToFirst} />
        </SafeAreaView>
    );
}

export default Secound;