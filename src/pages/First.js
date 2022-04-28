import React from 'react';
import { Text,SafeAreaView ,Button} from 'react-native';

function First(props) {
    function navigateToPage(){
        props.navigation.navigate('SecoundScreen',{userName:'samil turksoy'});
    }
    return(
        <SafeAreaView>
            <Text>
                HEllo First
            </Text>
            <Button title="2.sayfaya git" onPress={navigateToPage}/>
        </SafeAreaView>
    );
    
}
export default First;