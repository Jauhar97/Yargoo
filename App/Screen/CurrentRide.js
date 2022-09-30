import { StyleSheet, Text, View, Image, FlatList,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import Color from '../config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
const RideData =[
    {
        id:1,
        t1:'10:50',
        t2:'20:00',
        p1:'abohar',
        p2:'kokhar',
        uname:'Ranbir',
        price:'900.00',
        rate:'4.3',
        pic:require('../assets/Pic1.png')
    },
    {
        id:2,
        t1:'10:50',
        t2:'20:00',
        p1:'abohar',
        p2:'kokhar',
        uname:'Ranbir',
        price:'900.00',
        rate:'4.3',
        pic:require('../assets/Pic1.png')
    },
    {
        id:3,
        t1:'10:50',
        t2:'20:00',
        p1:'abohar',
        p2:'kokhar',
        uname:'Ranbir',
        price:'900.00',
        rate:'4.3',
        pic:require('../assets/Pic1.png')
    },
    {
        id:4,
        t1:'10:50',
        t2:'20:00',
        p1:'abohar',
        p2:'kokhar',
        uname:'Ranbir',
        price:'900.00',
        rate:'4.3',
        pic:require('../assets/Pic1.png')
    },
]
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
        <FlatList
    showsHorizontalScrollIndicator={false}
    data={RideData}
    style={{bottom:150, }}
    horizontal={true}
    keyExtractor={item=>item.id}
    renderItem={({item}) =>(
      <>
      <View
      style={styles.Card}
      onPress={()=>navigation.navigate('CardOpen')}
      >
        <Text style={{fontFamily:'SansBold', top:30, left:20, color:Color.YarB}}>{item.t1}</Text>
        <Text style={{fontFamily:'SansBold', top:80, left:20, color:Color.YarB}}>{item.t2}</Text>
        <View style={{width:2, height:60, backgroundColor:Color.YarB,top:10, left:80}}></View>
        <View style={{backgroundColor:'white', width:20, height:20, borderRadius:10, borderColor:Color.YarB, borderWidth:2, left:72}}></View>
        <View style={{backgroundColor:'white', width:20, height:20, borderRadius:10, borderColor:Color.YarB, borderWidth:2, left:72, bottom:83}}></View>
        <Text style={{position:'absolute', left:250, fontFamily:'SansBold',fontSize:20, color:Color.YarB, top:20}}>{item.price}</Text>
        <Text style={{fontFamily:'SansBold', color:Color.YarB, left:110, bottom:110}}>{item.p1}</Text>
        <View style={{flexDirection:'row', bottom:100, left:100}}>
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
        
        <Text style={{fontFamily:'SansBold', color:Color.YarB, left:110, bottom:70}}>{item.p2}</Text>
        <View style={{flexDirection:'row', bottom:60, left:100}}>
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
        <Image source={item.pic}style={{width:50 , height:50, borderRadius:25, left:20, bottom:40}}></Image>
        <Text style={{fontFamily:'SansBold', color:Color.YarB, fontSize:20, left:100, bottom:90}}>{item.uname}</Text>
        <AntDesign name='star' color={'#FFA500'} size={20} style={{left:100, bottom:85}}></AntDesign>
        <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.YarB, left:140, bottom:110}}>{item.rate}</Text>
     </View>
     </>
    )}
    ></FlatList>
        <View 
        onStartShouldSetResponder={()=>navigation.navigate('Rideinfo')}
        style={{alignContent:'center', alignItems:'center',justifyContent:'center', width:100, height:100, borderRadius:50, backgroundColor:Color.YarB, position:'absolute', top:450, alignSelf:'center'}}>
            <Entypo name='check' size={70} style={{color:Color.white}}></Entypo>
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
        marginLeft:10,
        // top:60,
        alignSelf:'center', 
    }
})