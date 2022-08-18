import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Brand({prop, navigation}) {
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
         <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Car details
                 </Text>
        </LinearGradient>
     <View>
        <Text  style={{fontFamily:'SansBold', fontSize:30, color:Color.YarB, left:15, top:10}}>What's your vehicle's brand</Text>
     </View>
     <View>
        <AntDesign name='search1' size={30} style={{top:30, left:20}}></AntDesign>
        <TextInput
     placeholder='Plate number'
     style={styles.texti1}
     >
    </TextInput>    
     </View>
     <Text style={{fontFamily:'SansBold', fontSize:30, color:Color.YarB, left:60, bottom:40}}>OR</Text>
     <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.darkgray, left:25, bottom:20}}>Popular makes</Text>
    <View style={{flexDirection:'row',}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Maruti</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:280, top:5 }}
        onPress={()=>navigation.navigate('')}
        ></AntDesign>
    </View>
    <View style={{flexDirection:'row', margintop:10}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Hyundai</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:267, top:5 }}></AntDesign>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Honda</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:285, top:5 }}></AntDesign>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Ford</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:305, top:5 }}></AntDesign>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Tata</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:305, top:5 }}></AntDesign>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>More</Text>

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
    texti1:{
        // backgroundColor:Color.lightgray,
        // borderRadius:15,?
        borderBottomWidth:1,
        borderBottomColor:Color.lightgray,
        left:20,
        bottom:55,
        width:280,
        alignSelf:'center',
        marginTop:40,
        padding:10,
        fontFamily:'SansBold'
    },
})