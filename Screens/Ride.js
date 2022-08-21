import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import React from 'react'
import Color from '../App/config/Color'

export default function Ride() {
 
  return (
    <View>
      <ImageBackground
      source={require('../App/assets/background.png')}
      style={{width:'100%', height:'100%'}}
      >
        <Text style={{fontFamily:'SansBold', fontSize:30, alignSelf:'center', color:Color.white, top:50}}
        >Faster is always better</Text>
        <View style={{width:350, height:100, backgroundColor:Color.lightgray, borderRadius:15, top:490, alignSelf:'center'}}>
          <Image source={require('../App/assets/fake.png')}
          style={{width:60, height:60, top:18, left:10}}
          >

          </Image>
          <Text style={{fontFamily:'SansBold', fontSize:20, left:80, maxWidth:280, bottom:40, color:Color.YarG}}>Covid-19 show solidarity, see our recomendation</Text>
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  
})