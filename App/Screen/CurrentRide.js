import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Color from '../config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

export default function CurrentRide({prop, navigation}) {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Current Ride
                 </Text>
        </LinearGradient>
        <Text style={{fontFamily:'OpenSans-Semibold', fontSize:28,color:Color.YarB, left:10, top:20  }}>Your rides</Text>              
        <View style={styles.Card}>
            <Text style={{color:Color.YarB, left:30, top:20, fontFamily:'SansBold'}}>
                10:50
            </Text>
            <Text style={{color:Color.YarB, left:30, top:70, fontFamily:'SansBold'}}>
                20:00
            </Text>
            <View style={{width:3, height:70, backgroundColor:Color.YarB,left:90, bottom:7}}/>
            <View style={{width:20, height:20, borderRadius:10,  borderWidth:2, borderColor:Color.YarB,
            left:81, bottom:85, backgroundColor:Color.white
            }}/>
            <View style={{width:20, height:20, borderRadius:10,  borderWidth:2, borderColor:Color.YarB,
            left:81, bottom:40, backgroundColor:Color.white
            }}/>
            <Text style={{fontFamily:'SansBold', fontSize:15, left:120, bottom:135, color:Color.YarB}}>Abohar</Text>
            <View style={{flexDirection:'row', left:100, bottom:135 }}>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:20, height:20, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.YarG,marginLeft:10, width:20, height:20, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:20, height:20, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                
            
            </View>
            <View style={{flexDirection:'row', left:100, bottom:80 }}>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:20, height:20, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:20, height:20, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.YarG,marginLeft:10, width:20, height:20, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                
            
            </View>
            <Text style={{fontFamily:'SansBold', fontSize:15, left:120, bottom:123, color:Color.YarB}}>Khokar</Text>
            <Text style={{left:260, bottom:220, fontFamily:'SansBold', fontSize:20, color:Color.YarB}}>900.00 ₹</Text>
            <View style={{flexDirection:'row'}}>
                <Image
                 style={{width:60, height:60, borderRadius:30, bottom:100, left:25}}
                source={require('../assets/Pic1.png')}
                >

                </Image>
                <Text style={{bottom:95, fontFamily:'SansBold', color:Color.YarB, fontSize:18, left:35}}>Ranbir</Text>
                <AntDesign name='star' size={20} color={Color.YarB} style={{bottom:60,right:25}}></AntDesign>
                <Text style={{color:Color.YarB, bottom:63, fontFamily:'SansBold', right:12,fontSize:20 }}>4.3</Text>
                <Ionicons name='flash-outline' size={30} style={{left:140, bottom:60}}></Ionicons>
            </View>
            <View style={{width:80, height:80, borderRadius:40, backgroundColor:Color.YarB, alignSelf:'center', alignContent:'center', alignItems:'center', justifyContent:'center'}}
                onStartShouldSetResponder={()=>navigation.navigate('Rideinfo')}
            >
                <Entypo size={50} color={Color.white} name='check'>

                </Entypo>
            </View>
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
    Card:{
        width:350,
        height:250,
        backgroundColor:'white',
        elevation:10,
        borderRadius:20,
        top:60,
        alignSelf:'center', 
    }
})