import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Color from '../config/Color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';

export default function Extrapackage( {props, navigation}) {
    const [checked, setChecked] = React.useState('first');
  return (
    <View>
       <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Extra package
                 </Text>
        </LinearGradient>
        <Text style={{fontFamily:'SansBold', color:Color.YarB, fontSize:20, left:10}}>Where do you prefer to pick-up extra package?</Text>
        <View style={{left:10, top:40, }}>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{width:60, height:60, borderRadius:30, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
            <Ionicons name='rocket-outline' size={35} color={Color.white}></Ionicons>
        </LinearGradient>
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:17, left:70, color:Color.darkgray ,bottom:50}}>Get more with our boost technology</Text>
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:8.5, left:70,bottom:45}}>Add your prefered stopovers to help boost find extra package on your way</Text>
        </View>
        <Text style={{fontFamily:'SansBold', fontSize:20, top:65, left:20, color:Color.YarB}}>Hounslow</Text>
        <Text style={{fontFamily:'SansBold', fontSize:20, top:95, left:20, color:Color.YarB}}>Luton</Text>
        <Text style={{fontFamily:'SansBold', fontSize:20, top:125, left:20, color:Color.YarB}}>Birmingham</Text>
        <Text style={{fontFamily:'SansBold', fontSize:20, top:155, left:20, color:Color.YarB}}>Add</Text>
        <View style={{height:30, width:30, left:340, top:30}}>
            <View style={{bottom:80}} >
               
        <RadioButton.Android
           style={{height: 10, width:10}}
           uncheckedColor={Color.YarG}
           color={Color.YarB}
           value="first"
           status={ checked === 'first' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('first')}
         />
         </View>
         <View style={{marginTop:-58}}>
          <RadioButton.Android
        style={{height: 100,}}
        value="second"
        uncheckedColor={Color.YarG}
        color={Color.YarB}
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
      <View style={{marginTop:20}}>
      <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={Color.YarG}
           color={Color.YarB}
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      </View>
     
         </View>
         <View style={{width:300, height:70, backgroundColor:Color.YarB, top:200, alignSelf:'center', borderRadius:35, justifyContent:'center', alignContent:'center', alignItems:'center'}}
         onStartShouldSetResponder={()=>navigation.navigate('Price')}
         >
            <Text style={{fontFamily:'SansBold', fontSize:25, color:Color.white}}>Continue</Text>
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