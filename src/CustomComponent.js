import React from 'react'; //jsx yapısını kullanacağım için ekledim.
import {SafeAreaView,StyleSheet} from 'react-native';// ben cihazda birşeyler göstereceğim. View dive denk gelir TExt p veya span
import Cart from './components/Cart';

const App =()=>{
  return(
    <SafeAreaView style={style.container}>
      <Cart title="şamil türksoy" text="rn çok güzel" />
      <Cart title="şamil " text="rn  güzel" />
      <Cart title=" türksoy" text="rn çok " />
    </SafeAreaView>
  );
}

  const style =StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'e0e0e0e'
    }
  })

export default App;