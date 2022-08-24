import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import React from 'react'
import Color from '../App/config/Color'

export default function Ride({navigation}) {
 
  return (
    <View>
      <ImageBackground
      source={require('../App/assets/background.png')}
      style={{width:'100%', height:'100%'}}
      >
        <Text style={{fontFamily:'SansBold', fontSize:30, alignSelf:'center', color:Color.white, top:10}}
        >Faster is always better</Text>
        <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.white, top:25, left:10, color:Color.lightgray}}>Ongoing rides</Text>
        <Text style={{left:320, top:5, fontFamily:'OpenSans-Regular', color:Color.white}}
        onPress={()=>navigation.navigate('Ongoingrides')}
        >View all</Text>
        <View
        style={{backgroundColor:Color.white, width:350, height:110, position:'absolute', borderRadius:15, top:100, alignSelf:'center'}}
        >

          <Text style={{color:Color.darkgray, fontFamily:'OpenSans-Semibold', left:200, top:15}}>
            Lukhnow
          </Text>
          <Text style={{color:Color.darkgray, fontFamily:'OpenSans-Semibold', left:226, top:55}}>
            Dehli
          </Text>
          <View style={{width:2, height:70, backgroundColor:Color.darkgray, left:280, bottom:17}}>

          </View>
          <Image style={{width:50, height:50, borderRadius:25, bottom:105, left:20}}
          source={require('../App/assets/Pic2.png')}
          >

          </Image>
          <Text style={{fontFamily:'SansBold', color:Color.YarB, bottom:100, left:10}}>Kumar Raj</Text>
          <Text style={{fontFamily:'SansBold', color:Color.YarB, bottom:100, left:10}}>Cultus/AB0415j</Text>
        </View> 
        <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.white, top:185, left:10, color:Color.lightgray}}>Published rides</Text>
        <Text style={{left:320, top:165, fontFamily:'OpenSans-Regular', color:Color.white}}
         onPress={()=>navigation.navigate('Publishedrides')}
        >View all</Text>
        <View
        style={{backgroundColor:Color.white, width:350, height:110, position:'absolute', borderRadius:15, top:300, alignSelf:'center'}}
        >

          <Text style={{color:Color.darkgray, fontFamily:'OpenSans-Semibold', left:200, top:15}}>
            Lukhnow
          </Text>
          <Text style={{color:Color.darkgray, fontFamily:'OpenSans-Semibold', left:226, top:55}}>
            Dehli
          </Text>
          <View style={{width:2, height:70, backgroundColor:Color.darkgray, left:280, bottom:17}}>

          </View>
          <Image style={{width:50, height:50, borderRadius:25, bottom:105, left:20}}
          source={require('../App/assets/Pic2.png')}
          >

          </Image>
          <Text style={{fontFamily:'SansBold', color:Color.YarB, bottom:100, left:10}}>Kumar Raj</Text>
          <Text style={{fontFamily:'SansBold', color:Color.YarB, bottom:100, left:10}}>Cultus/AB0415j</Text>
        </View> 
        
        <View style={{width:350, height:100, backgroundColor:Color.lightgray, borderRadius:15, top:390, alignSelf:'center'}}>
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