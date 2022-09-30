import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Color from '../config/Color'

export default function Stop({props, navigation}) {
  return (
    <View>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
            <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
            <Text style={styles.HeadText}>
            Stopovers 
            </Text>
        </LinearGradient>
        <Text style={styles.BodyText}>Do you want to add stopovers?</Text>
        <Text style={styles.BodyText2} onPress={()=>navigation.navigate('Addstop')}>Add</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadText:{
        fontFamily:'SansBold',
        fontSize:30,
        top:-18,
        left:50,
        color:'white'
    },
    BodyText:{
        fontFamily:'SansBold',
        fontSize:25,
        maxWidth:250,
        left:10,
        top:10,
        color:Color.YarB
    },
    BodyText2:{
        fontFamily:'SansBold',
        fontSize:25,
        maxWidth:250,
        left:10,
        top:30,
        color:Color.YarB
    }
})