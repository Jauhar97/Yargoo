import { StyleSheet, Text, View , ImageBackground,ScrollView} from 'react-native'
import React from 'react'
import Color from '../config/Color'

export default function Dropoff({prop, navigation}) {
    const image = require('../assets/map.png')
  return (
    <View style={styles.container}>
      {/* <ScrollView alwaysBounceVertical={true} style={{flex:1}}> */}
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View style={styles.dropoff} onStartShouldSetResponder={()=>navigation.navigate('Stop')}>
        <Text style={styles.text}>Set Route
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
        top:330,
        alignSelf:'center', 
        height:70,
        backgroundColor:Color.YarB
      }
})