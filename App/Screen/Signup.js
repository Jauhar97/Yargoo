import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Basicscreen from '../Components/Basicscreen'
import Button from '../Components/Button'
import LinearGradient from 'react-native-linear-gradient'
import Color from '../config/Color'

export default function Signup() {
  return (
    <>
    <SafeAreaView>
      <View>
             <LinearGradient start={{x: 0.5, y: 1}} end={{x:1, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                 <Text style={styles.buttonText}>
                    Sign-Up
                 </Text>
             </LinearGradient>
             <View style={{width:350, height:70, backgroundColor:Color.YarB, top:80, alignSelf:'center', borderRadius:15,}}>
                   <View style={{width:2, height:75, backgroundColor:'white', left:60}}></View>
                   <Text style={{fontSize:50,bottom:73, left:20,color:'white',fontFamily:'OpenSans-Bold'}}>f</Text>
                   <Text style={{bottom:120, left:100, color:'white', fontSize:17, fontFamily:'OpenSans-Semibold'}}>CONNECT WITH FACEBOOK</Text>

             </View>
             <View style={{width:150, backgroundColor:'black', height:1,top:150}}></View>
             <Text style={{fontSize:20, color:'black', top:135, left:180 }}>OR</Text>
             <View style={{width:150, backgroundColor:'black', height:1,top:122, left:240}}></View>
             <View style={{width:350, height:70, backgroundColor:Color.YarB, top:180, alignSelf:'center', borderRadius:15,}}>
                   
                   
                   <Text style={{top:25, left:70, color:'white', fontSize:17,fontFamily:'OpenSans-Semibold'}}>SIGN-UP WITH YOUR EMAIL</Text>
                  <Text style={{top:70, fontSize:14, alignSelf:'center', }} >By singing up, you accept our t&cs and privacy policy</Text>
                  <Text style={{fontSize:20, top:80, alignContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center', top:120}}>In publishing and graphic design, Lorem ipsum is a placeholder text 
                    commonly used to demonstrate </Text>
                  <Text style={{}}>English</Text>
                    {/*<View style={{marginTop:200}}></View> */}
             </View>
      </View>
    </SafeAreaView>
    
    </>
  )
}

const styles = StyleSheet.create({
  buttonText:{
    fontSize:40,
    fontFamily:'OpenSans-Bold',
    left:10,
    top:4,
    color:'white'
},
})