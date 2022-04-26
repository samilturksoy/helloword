import React from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import styles from './Cart.style'
const Cart = (props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.button_container} onPress={()=>Alert.alert('Merhba' + props.title)}>
                <Text style={styles.button_title}> BEGENDİM</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Cart;