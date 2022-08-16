import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import Color from '../config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { TextInput } from 'react-native-paper'

export default function Price({prop,navigation}) {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
         <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Price
                 </Text>
        </LinearGradient>
        <Text style={{ color:Color.YarB,fontFamily:'SansBold',fontSize:25, left:10, top:10}}>Set your price</Text>
        <TextInput
        textAlign='center'
        style={{borderBottomWidth:1, borderBottomColor:'Black', width:150, alignSelf:'center',top:40}}
        >

        </TextInput>
        <View style={{width:290, height:55, backgroundColor:Color.YarB, borderRadius:30, top:120, alignSelf:"center"}}
        onStartShouldSetResponder={()=>navigation.navigate('Description')}
        >
            <Text style={{fontFamily:'OpenSans-Regular', fontSize:20,color:Color.white, alignSelf:"center", top:12}}>Continue</Text>
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