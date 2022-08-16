import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Color from '../config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Description({prop, navigation}) {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Description
                 </Text>
        </LinearGradient>
        <Text style={{ color:Color.YarB,fontFamily:'SansBold',fontSize:25, left:10, top:10}}>Anything to add about your delivery ride</Text>
        <TextInput style={{ backgroundColor:Color.lightgray, width:320, height:200, borderRadius:30, alignSelf:'center', top:60, padding:20, paddingBottom:150}}
        placeholder='Write here...'
        placeholderTextColor={Color.YarB}
        numberOfLines={10}
        
        >
            

        </TextInput>
        <View style={{width:190, height:70, backgroundColor:Color.lightgray,alignSelf:'center', top:200, borderRadius:50}}
        onStartShouldSetResponder={()=>navigation.navigate('Publish')}
        >
                <Text style={{alignSelf:'center', top:20, fontFamily:'SansBold',fontSize:20 , color:Color.YarB}}>Publish</Text>
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