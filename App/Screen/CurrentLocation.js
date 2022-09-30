import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Color from '../config/Color'
import Entypo from 'react-native-vector-icons/Entypo'

export default function CurrentLocation({props, navigation}) {
  return (
    <SafeAreaView>
        <LinearGradient start={{x: 1, y: 1.2}} end={{x:2, y: 0.5}} colors={['#0086CF','#4FA0A5']} style={{height:800, }}>
            <View style={{backgroundColor:Color.white, width:350, height:470, alignSelf:'center', top:130, borderRadius:15  }}>
                <Text style={{fontFamily:'SansBold',fontSize:25, alignSelf:'center', top:30, color:Color.YarB}}>Use your Current location</Text>
                <View style={{width:120,alignSelf:'center',top:100,alignContent:'center',alignItems:'center', height:120, borderRadius:60, borderWidth:3,borderColor:Color.lightgray}}>
                    <Entypo name='direction' style={{top:20}} color={Color.lightgray} size={70}></Entypo>
                </View>
                <View style={{width:300,height:50,backgroundColor:Color.YarB, alignSelf:'center', borderRadius:25, top:180,}}>
                    <Text style={{color:Color.white,fontSize:20, fontFamily:'SansBold', alignSelf:'center', top:9}}>Allow</Text>
                </View>
                <Text style={{color:Color.YarB,fontSize:20, fontFamily:'SansBold', alignSelf:'center', top:205}}
                onPress={()=>navigation.navigate('Language')}
                >Skip</Text>
            </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})