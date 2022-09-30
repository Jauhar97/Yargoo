import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterInput from "react-native-counter-input";
import Color from '../config/Color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Counter({prop, navigation}) {
  return (
    <View style={{backgroundColor:'white', flex:1,}}>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Counter
                 </Text>
        </LinearGradient>
        <Text style={{ color:Color.YarB,fontFamily:'SansBold',fontSize:25, left:10, top:10}}>How many package can you take?</Text>
        <CounterInput
        
        style={{alignSelf:'center', top:50,backgroundColor:'transparent', elevation:0, padding:0}}
        decreaseButtonBackgroundColor={Color.YarB}
        increaseButtonBackgroundColor={Color.YarB}
        horizontal={true}
        onChange={(counter) => {
        console.log("onChange Counter:", counter);
        }}
        />
         <Text style={{ color:Color.YarB,fontFamily:'SansBold',fontSize:25, left:10, top:40}}>How many passenger can you take?</Text>
       
        <CounterInput
        
        style={{alignSelf:'center', top:100,backgroundColor:'transparent', elevation:0, padding:0}}
        decreaseButtonBackgroundColor={Color.YarB}
        increaseButtonBackgroundColor={Color.YarB}
        horizontal={true}
        onChange={(counter) => {
        console.log("onChange Counter:", counter);
        }}
        />
        <View style={{width:50, height:50, backgroundColor:Color.YarB, borderRadius:25, left:330, top:150}}
            onStartShouldSetResponder={()=> navigation.navigate('Extrapackage')}
            >
            <AntDesign name='arrowright' color={'white'} size={30} style={{top:10, left:10}}></AntDesign>
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