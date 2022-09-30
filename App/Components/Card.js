import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../config/Color'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import RNDateTimePicker from '@react-native-community/datetimepicker'

export default function Card({prop,navigation,T1,T2,P1,P2,Price, Name, rate}) {
  return (
     
    <View style={styles.Card} >
       <TouchableOpacity >
            <Text style={{color:Color.YarB, left:30, top:20, fontFamily:'SansBold',fontSize:12}}>
                {T1}
            </Text>
            <Text style={{color:Color.YarB, left:30, top:50, fontFamily:'SansBold',fontSize:12}}>
                {T2}
            </Text>
            <View style={{width:3, height:50, backgroundColor:Color.YarB,left:90,}}/>
            <View style={{width:20, height:20, borderRadius:10,  borderWidth:2, borderColor:Color.YarB,
            left:81, bottom:65, backgroundColor:Color.white
            }}/>
            <View style={{width:20, height:20, borderRadius:10,  borderWidth:2, borderColor:Color.YarB,
            left:81, bottom:35, backgroundColor:Color.white
            }}/>
            <Text style={{fontFamily:'SansBold', fontSize:13, left:120, bottom:105, color:Color.YarB}}>{P1}</Text>
            <View style={{flexDirection:'row', left:100, bottom:105 }}>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:8, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.YarG,marginLeft:10, width:15, height:15, borderRadius:8, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:8, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                
            
            </View>
            <View style={{flexDirection:'row', left:100, bottom:80 }}>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.YarG,marginLeft:10, width:15, height:15, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                
            
            </View>
            <Text style={{fontFamily:'SansBold', fontSize:13, left:120, bottom:113, color:Color.YarB}}>{P2}</Text>
            <Text style={{left:220, bottom:170, fontFamily:'SansBold', fontSize:15, color:Color.YarB}}>{Price}</Text>
            <View style={{flexDirection:'row'}}>
                <Image
                 style={{width:50, height:50, borderRadius:25, bottom:65, left:25}}
                source={require('../assets/Pic1.png')}
                >

                </Image>
                <Text style={{bottom:65, fontFamily:'SansBold', color:Color.YarB, fontSize:18, left:55}}>{Name}</Text>
                <AntDesign name='star' size={20} color={Color.YarB} style={{bottom:40,right:5}}></AntDesign>
                <Text style={{color:Color.YarB, bottom:43, fontFamily:'SansBold', fontSize:20 }}>{rate}</Text>
                <Ionicons name='flash-outline' size={30} style={{left:90, bottom:60}}></Ionicons>
            </View>
            </TouchableOpacity>
        </View>
     
  )
}

const styles = StyleSheet.create({
    Card:{
        width:300,
        height:220,
        backgroundColor:'white',
        elevation:10,
        borderRadius:20,
        top:-20,
        marginLeft:20,
        marginRight:10,
        alignSelf:'center', 
      }
})