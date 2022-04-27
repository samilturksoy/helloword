// import React from 'react';
// import {SafeAreaView,Text,Button} from 'react-native';

// // State bir haberim neden. Aşşağıdaki yazılan kod ekranımda güncellenmiyor.
// // Acaba counter mı artmıyor bunu test etmek için console counter değerini kontrol eden bir buton daha
// // oluşturdum ve arttığını gördüm.
// function App(){

//   let counter=0;

//   function updateCounter(){
//     counter++;
//   }
//   return(
//     <SafeAreaView>
//       <Text style={{fontSize:40}}>Counter : {counter}</Text>
//       <Button title='Update counter' onPress={updateCounter} />
//       <Button title='Check Counter' onPress={() => console.log(counter)} />
//     </SafeAreaView>
//   );
// }
// export default App;

import React, {useState} from 'react';
import {SafeAreaView,Text,Button} from 'react-native';

function App() {

  const [getCounter,setCounter] = useState(0);

  function updateCounter(){
    setCounter(getCounter + 1);
  }
  function sil(){
    setCounter(getCounter - 1);
  }
  return(
    <SafeAreaView>
      <Text style={{fontSize:40}}>Counter: {getCounter}</Text>
      <Button title='Update Counter' onPress={updateCounter}></Button>
      <Button title='sil Counter' onPress={sil}></Button>
    </SafeAreaView>
  );
}

export default App;