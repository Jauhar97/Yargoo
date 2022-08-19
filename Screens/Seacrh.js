import { StyleSheet, Text, View , ImageBackground,ScrollView,TextInput,Image } from 'react-native'
import React from 'react'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Card from '../App/Components/Card'

export default function Seacrh({prop, navigation}) {
 
  return (
    <View style={{backgroundColor:Color.white,flex:1}}>
        <TextInput
     placeholder=''
     style={styles.texti1}
     >
    </TextInput>
    <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:150,width:350, alignSelf:'center', borderRadius:20, bottom:10,  }}>
        <Text style={{color:Color.white, fontFamily:'SansBold', fontSize:20, left:70, top:20}}>Rides closer to you</Text>  
        <Text style={{color:Color.white, fontFamily:'SansBold', fontSize:15,top:37, maxWidth:250, left:70, }}>Now you can see which driver is closer to your location to pick up your package</Text>                      
        <View style={{width:50, height:50, borderRadius:25,borderWidth:2, borderColor:Color.white, bottom:20, left:10}}>
            <Feather name='box' color={Color.white} size={40} style={{top:3, left:3}}></Feather>
        </View>
        
    </LinearGradient>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
    <Card onPress={navigation.navigate('CardOpen')}></Card>
    <Card></Card>
    <Card></Card>
    </ScrollView>
    <View style={{backgroundColor:Color.white, width:'auto', }}>
    <Text style={{bottom:25, fontFamily:'SansBold', fontSize:20, left:20}}>16 Rides</Text>
        <View style={{width:395, height:1, backgroundColor:'black', bottom:20}}>
        
        </View>
        <Text style={{bottom:10, left:20, fontFamily:'SansBold'}}>3 Full Rides</Text>
        <Text style={{bottom:10, left:20, fontFamily:'SansBold'}}>16 Rides Available</Text>
        <Text style={{left:325, position:'absolute', top:15, fontFamily:'SansBold', color:Color.YarB, fontSize:20}}
        onPress={()=>navigation.navigate('Basicfilter')}
        >Filter</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  texti1:{
    backgroundColor:Color.lightgray,
    borderRadius:15,
    
    // left:-20,
    bottom:40,
    width:350,
    // right:50,
    alignSelf:'center',
    marginTop:80,
    padding:10,
    fontFamily:'SansBold'
},

})