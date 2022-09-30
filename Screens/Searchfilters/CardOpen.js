import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'

export default function CardOpen() {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
      <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                 <Text style={styles.buttonText}>
                    Ride Details
                 </Text>
                 <AntDesign name='arrowleft' color={Color.white} style={{bottom:20, left:10}} size={30}></AntDesign>
             </LinearGradient>
             <Text style={{fontFamily:'SansBold', fontSize:25, color:Color.YarB, left:15, top:20}}>Check the deatils and book your Delivery !</Text>
              <Text style={{color:Color.YarB, fontFamily:'OpenSans-Semibold',top:50, left:20}}>Wed. 9 Dec-16:45 </Text>
              <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.YarB, top:60, left:70}}>Lucknow</Text>
              <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.YarB, top:80, left:70, marginTop:30}}>Dehli</Text>
              <Octicons name='circle' color={Color.YarB} size={20} style={{bottom:20, left:22}}></Octicons>
              <View
              style={{width:2, height:60, backgroundColor:Color.YarB, left:32, bottom:20,}}
              ></View>
              <Octicons name='circle' color={Color.YarB} size={20} style={{bottom:20, left:22}}></Octicons>
              <View style={{height:2, width:345, backgroundColor:Color.darkgray, alignSelf:'center'}}>

              </View>
              <Text style={{color:Color.YarB, fontFamily:'SansBold', fontSize:20, top:10, left:10}}> 1 Package : ₹ 1170.00</Text>
              <Text style={{color:Color.darkgray, fontFamily:'SansBold', fontSize:20, top:10, left:20}}>Payment by cash</Text>
              <Text style={{fontFamily:'SansBold', fontSize:25, left:315, bottom:45}}>Cash</Text>
          <View style={{width:300, height:60, backgroundColor:Color.YarB, borderRadius:25, top:120, alignSelf:'center', alignItems:'center', alignContent:'center', justifyContent:'center'}}
          // onStartShouldSetResponder={}
          >
              <Text style={{fontFamily:'SansBold', color:Color.white, fontSize:25}}>Continue</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText:{
    fontSize:30,
    fontFamily:'SansBold',
    left:45,
    top:12,
    bottom:25,
    color:'white'
},
})