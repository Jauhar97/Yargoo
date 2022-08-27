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
        style={{backgroundColor:Color.white, width:350, height:130, position:'absolute', borderRadius:15, top:100, alignSelf:'center'}}
        >

          <Text style={{color:Color.darkgray,color:'black', fontFamily:'SansBold', left:200, top:25}}>
            Lukhnow
          </Text>
          <Text style={{color:Color.darkgray,color:'black', fontFamily:'SansBold', left:226, top:67}}>
            Dehli
          </Text>
          <Image source={require('../App/assets/car.png')} style={{width:25, height:25, position:'absolute', left:300, top:100}}></Image>
          <View style={{width:2, height:70, backgroundColor:Color.YarB, left:280, bottom:7}}>
          <View style={{width:15, height:15, borderRadius:7.5, borderColor:Color.YarB, borderWidth:2, backgroundColor:Color.white , right:7, bottom:2}}></View>
            <View style={{width:15, height:15, borderRadius:7.5, borderColor:Color.YarB, borderWidth:2, backgroundColor:Color.white , right:7, top:42}}></View>
          </View>
          <Image style={{width:50, height:50, borderRadius:25, bottom:95, left:20}}
          source={require('../App/assets/Pic2.png')}
          >

          </Image>
          <Text style={{fontFamily:'SansBold', color:Color.YarB, bottom:85, left:20}}>Kumar Raj</Text>
          <Text style={{fontFamily:'OpenSans-Regular', color:Color.YarB, bottom:85, left:20, fontSize:13}}>Cultus/AB0415j</Text>
        </View> 
        <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.white, top:185, left:10, color:Color.lightgray}}>Published rides</Text>
        <Text style={{left:320, top:165, fontFamily:'OpenSans-Regular', color:Color.white}}
         onPress={()=>navigation.navigate('Publishedrides')}
        >View all</Text>
        <View
        style={{backgroundColor:Color.white, width:350, height:130, position:'absolute', borderRadius:15, top:300, alignSelf:'center'}}
        >

          <Text style={{color:'black', fontFamily:'SansBold', left:200, top:25}}>
            Lukhnow
          </Text>
          <Text style={{color:'black', fontFamily:'SansBold', left:226, top:67}}>
            Dehli
          </Text>
          <Image source={require('../App/assets/box.png')} style={{width:27, height:27, position:'absolute', left:300, top:100}}></Image>
          <View style={{width:2, height:70, backgroundColor:Color.YarB, left:280, bottom:7}}>
            <View style={{width:15, height:15, borderRadius:7.5, borderColor:Color.YarB, borderWidth:2, backgroundColor:Color.white , right:7, bottom:2}}></View>
            <View style={{width:15, height:15, borderRadius:7.5, borderColor:Color.YarB, borderWidth:2, backgroundColor:Color.white , right:7, top:42}}></View>
          </View>
          <Image style={{width:50, height:50, borderRadius:25, bottom:95, left:20}}
          source={require('../App/assets/Pic2.png')}
          >

          </Image>
          <Text style={{fontFamily:'SansBold', color:Color.YarB, bottom:85, left:20}}>Kumar Raj</Text>
          <Text style={{fontFamily:'OpenSans-Regular',fontSize:13, color:Color.YarB, bottom:85, left:20}}>Cultus/AB0415j</Text>
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