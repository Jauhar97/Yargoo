import { StyleSheet, Text, View , ImageBackground,ScrollView} from 'react-native'
import React from 'react'
import Color from '../App/config/Color'
// import { ScrollView } from 'native-base'

export default function Seacrh({props, navigation}) {
  const image = require('../App/assets/map.png')
  return (
    <View style={styles.container}>
      {/* <ScrollView alwaysBounceVertical={true} style={{flex:1}}> */}
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View style={styles.dropoff} onStartShouldSetResponder={()=>navigation.navigate('Dropoff')}>
        <Text style={styles.text}>Select drop-Off
        </Text>
      </View>
    </ImageBackground>
    {/* </ScrollView> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 32,
    top:12,
    fontWeight: "bold",
    textAlign: "center",
   
  },
  dropoff:{
    width:392,
    top:300,
    alignSelf:'center', 
    height:90,
    backgroundColor:Color.YarB
  }

})