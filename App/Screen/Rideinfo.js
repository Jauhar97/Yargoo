import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Color from '../config/Color'

export default function Rideinfo({prop, navigation}) {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
       <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Ride details
                 </Text>
        </LinearGradient>
        <View style={{flexDirection:'row'}}>
                <Text style={{color:Color.YarB, fontFamily:'SansBold', fontSize:20, top:40, left:10}}>Leaving from</Text>
                <Text style={{color:Color.YarB, fontFamily:'SansBold', fontSize:20, top:40, left:160}}>Abohar</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:30}}>
                <Text style={{color:Color.YarB, fontFamily:'SansBold', fontSize:20, top:40, left:10}}>
                    Going to
                </Text>
                <Text style={{color:Color.YarB, fontFamily:'SansBold', fontSize:20, top:40, left:207}}>Khokar</Text>
        </View>
        <View style={{width:392, height:2, backgroundColor:Color.darkgray, top:70}}/>
        <View style={{flexDirection:'row'}}>
            <Text style={{top:90, left:15, fontFamily:'OpenSans-Regular', fontSize:17}}>Tue,28 May, 20:30</Text>
            <Text style={{top:90, left:15, fontFamily:'OpenSans-Regular', fontSize:17, marginLeft:130}}>1 package</Text>

        </View>
        <View style={{width:392, height:1, backgroundColor:Color.darkgray, top:115}}/>
        <Image
        style={{width:350, height:250, borderRadius:30, alignSelf:'center', top:150}}
        source={require('../assets/map.png')}
        ></Image>
       <View style={{width:190, height:70, backgroundColor:Color.YarB,alignSelf:'center',  borderRadius:50, top:180}}
        onStartShouldSetResponder={()=>navigation.navigate('Offer')}
        >
                <Text style={{alignSelf:'center', top:20, fontFamily:'SansBold',fontSize:20 , color:Color.white}}>Continue</Text>
            </View>

    </View>
  )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:30,
        fontFamily:'SansBold',
        left:45,
        top:-18,
        bottom:25,
        color:'white'
    },
})