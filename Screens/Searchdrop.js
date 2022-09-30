import { StyleSheet, Text, View , ImageBackground,ScrollView} from 'react-native'
import React from 'react'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Searchdrop({navigation}) {
    const image = require('../App/assets/map.png')
  return (
    <View style={styles.container}>
      <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Drop off
                 </Text>
      </LinearGradient>
      {/* <ScrollView alwaysBounceVertical={true} style={{flex:1}}> */}
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View style={styles.dropoff} onStartShouldSetResponder={()=>navigation.pop(2)}>
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
        fontSize: 25,
        top:17,
        fontWeight: "bold",
        textAlign: "center",
       
      },
      dropoff:{
        width:392,
        top:290,
        alignSelf:'center', 
        height:70,
        backgroundColor:Color.YarB
      },
      buttonText:{
        fontSize:30,
        fontFamily:'SansBold',
        left:45,
        top:-18,
        bottom:25,
        color:'white'
    },
})