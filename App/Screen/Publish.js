import { StyleSheet, Text, View , ImageBackground} from 'react-native'
import React from 'react'
import Color from '../config/Color'
import LinearGradient from 'react-native-linear-gradient'

export default function Publish({prop, navigation}) {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
         
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:720, }}>
            <ImageBackground resizeMode="cover" style={styles.image}
            source={require('../assets/char.png')}
            >
            </ImageBackground> 
            <Text style={{fontFamily:'OpenSans-Semibold', fontSize:28, maxWidth:400, textAlign:'center', backgroundColor:'transparent', bottom:165, color:'white'}}>Great! your ride is online. you'll get a notification as soon as someone request a delivery.</Text>              
            <View style={{width:190, height:70, backgroundColor:Color.lightgray,alignSelf:'center',  borderRadius:50, bottom:100}}
        onStartShouldSetResponder={()=>navigation.navigate('CurrentRide')}
        >
                <Text style={{alignSelf:'center', top:20, fontFamily:'SansBold',fontSize:20 , color:Color.YarB}}>Continue</Text>
            </View>
        </LinearGradient>      
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        top:40,
        width:80,
        height:240,
        flex: 1,
        justifyContent: "center",
        alignSelf:'center'
    },
})