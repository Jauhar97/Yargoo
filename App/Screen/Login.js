import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../config/Color';
import CurrentLocation from './CurrentLocation';
import { AuthContext } from '../../navigation/AuthProvider';
export default function Login({props, navigation}) {

    const {login}=useContext(AuthContext);
  return (
    <SafeAreaView>
        <View >
             <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Login
                 </Text>
             </LinearGradient>
             <Text style={styles.headtext}>What's your email and password</Text>
             <TextInput
             placeholder='Email'
             style={styles.texti1}
             >

             </TextInput>
             <TextInput
             placeholder='Password'
             placeholderTextColor={'grey'}
             style={styles.texti1}
             >
             </TextInput>
            <Text style={{color:Color.YarB, fontFamily:'SansBold', left:25, top:50}}>Forget Password</Text>
            <View style={{width:150, height:60, backgroundColor:Color.YarB, borderRadius:30, alignSelf:'center', top:200, alignContent:'center', alignItems:'center'}}
            onStartShouldSetResponder={()=>  login( email, password )}
            >
                <Text style={{fontFamily:'SansBold', fontSize:20, color:'white',top:15 }}
                
                >Login</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    buttonText:{
        fontSize:40,
        fontFamily:'OpenSans-Bold',
        left:60,
        // top:-4,
        bottom:25,
        color:'white'
    },
    texti1:{
        backgroundColor:Color.lightgray,
        borderRadius:15,
        top:10,
        width:350,
        alignSelf:'center',
        marginTop:40,
        padding:10,
        fontFamily:'SansBold'
    },
    headtext:{
        fontFamily:'SansBold',
        fontSize:25,
        color:'black',
        left:20,
        top:20,
    }
})