/**
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';




const App = ()=> {



  return (
    <SafeAreaView style={styles.container}>
      
    <View style={{flexBasis:100,height:100, backgroundColor:'purple'}}/>
    <View style={{width:350, flexShrink:1,height:100, backgroundColor:'yellow'}}/>
    <View style={{width:100,height:100, backgroundColor:'tomato'}}/>
    <View style={{width:100,flexGrow:1,height:100, backgroundColor:'grey'}}/>
    <View style={{width:100, height:100, backgroundColor:'blue'}}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'green',
     flexDirection:'row',
    // alignItems:'center',  bu ikisi farkli
    alignContent:'center', // <<==^^^^^^
    justifyContent:'space-around',
    flexWrap:'wrap',
  },
  box:{
  }
});

export default App;

//flexgrow:1
//flexbasis:100
//flexShrink:1  = flex:-1
//flexWrap:'wrap'