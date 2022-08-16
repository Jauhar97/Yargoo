import { StyleSheet, Text, View,FlatList, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Inbox() {
  const Data=[
    {
      id:1,
      username:'Jenifer',
      pic: require('../App/assets/Pic1.png'),
      time:'2 hours ago',
      message:'Hello how are you. Its mickel from England what about you whats your day'
    },
    {
      id:2,
      username:'Jofer',
      time:'2 hours ago',
      pic: require('../App/assets/Pic2.png'),
      message:'Hellooo native project. . Its mickel from England what about you whats your day'
    },
   
    {
      id:3,
      username:'Fergusen',
      time:'2 hours ago',
      pic: require('../App/assets/Pic3.png'),
      message:'How are you bro!. Its mickel from England what about you whats your day'
    },
    {
      id:4,
      username:'Clerk',
      pic: require('../App/assets/Pic4.png'),
      time:'2 hours ago',
      message:'welcome to school. Its mickel from England what about you whats your day'
    },
    {
      id:5,
      username:'Mikle',
      time:'2 hours ago',
      pic: require('../App/assets/Pic5.png'),
      message:'search engine optimization. Its mickel from England what about you whats your day'
    },
    {
      id:6,
      username:'Eliot',
      time:'2 hours ago',
      pic: require('../App/assets/Pic6.png'),
      message:'criminolgy. Its mickel from England what about you whats your day'
    },
    {
      id:7,
      username:'Smith',
      time:'2 hours ago',
      pic: require('../App/assets/Pic2.png'),
      message:'good luck brother!. Its mickel from England what about you whats your day '
    },
    
  ]
  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
      <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                   Inbox
                 </Text>
        </LinearGradient>
   
    <FlatList
    data={Data}
    keyExtractor={item=>item.id}
    renderItem={({item}) =>(
      <>
      <View >
        <Text style={styles.name}>{item.username}</Text>
        <Image style={styles.profile} source={item.pic}/>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      
      </>
    )}
>

    </FlatList>
    </SafeAreaView>    

  )
}

const styles = StyleSheet.create({
  name:{
    fontFamily:'OpenSans-Semibold',
    fontSize:18,
    bottom:10,
    top:25,
    left:90,
    color:'black'
  },
  profile:{
    width:70,
    height:70,
    borderRadius:35,
    left:10
  },
  message:{
    fontFamily:'OpenSans-Regular',
    left:90,
    bottom:40,
    maxWidth:300,
    color:Color.lightgray
  
  },
  time:{
    fontFamily:'OpenSans-Regular',
    fontSize:10,
    left:300,
    bottom:100,
    fontWeight:'bold',
    color:Color.darkgray
  },
  buttonText:{
    fontSize:30,
    fontFamily:'SansBold',
    left:45,
    top:-18,
    bottom:25,
    color:'white'
},
})