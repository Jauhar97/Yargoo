import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Basicscreen from '../Components/Basicscreen'
// import Button from '../Components/Button'
import LinearGradient from 'react-native-linear-gradient'
import Color from '../config/Color'
import DropDownPicker from 'react-native-dropdown-picker'

export default function Signup({props, navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Driver', value: 'pak'},
    {label: 'Passenger', value: 'in'},
    
  ]);
  return (
    <>
    <SafeAreaView style={{flex:1, backgroundColor:Color.white}}>
      <View style={{backgroundColor:Color.white, flex:1}}>
             <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                 <Text style={styles.buttonText}>
                    Sign-Up
                 </Text>
             </LinearGradient>
             <View style={{width:350, height:70, backgroundColor:Color.YarB, top:40, alignSelf:'center', borderRadius:15,}}>
                   <View style={{width:2, height:75, backgroundColor:'white', left:60}}></View>
                   <Text style={{fontSize:50,bottom:73, left:20,color:'white',fontFamily:'OpenSans-Bold'}}>f</Text>
                   <Text style={{bottom:120, left:100, color:'white', fontSize:17, fontFamily:'OpenSans-Semibold'}}>CONNECT WITH FACEBOOK</Text>

             </View>
             <View style={{width:150, backgroundColor:Color.lightgray, height:1,top:80}}></View>
             <Text style={{fontSize:20, color:'black', position:'absolute', top:205, left:180, fontFamily:'SansBold' }}>OR</Text>
             <View style={{width:150, backgroundColor:Color.lightgray, height:1,top:80, left:240}}></View>
             {/* <View style={{width:350, height:70, backgroundColor:Color.YarB, top:125, alignSelf:'center', borderRadius:15,}}> */}
                   
                   <TouchableOpacity
                   style={{
                    width:350,
                    height:70,
                    backgroundColor:Color.YarB,
                    top:120,
                    borderRadius:15,
                    alignSelf:'center',
                    alignContent:'center',
                    justifyContent:'center',
                    alignItems:'center'

                   }}

                   onPress={()=>navigation.navigate('Signup2')}
                   >
                    <Text
                    style={{
                      fontFamily:'SansBold',
                      color:Color.white,
                      fontSize:20
                    }}
                    >
                      Continue with Email
                    </Text>
                   </TouchableOpacity>
                   <Text
                    style={{
                      top:150,
                      fontFamily:'OpenSans-Semibold',
                      color:'black',
                      fontSize:13,
                     left:90
                    }}
                    >
                      Already have an account?  
                    </Text>
                    <Text
                    style={{
                      top:133,
                      fontFamily:'SansBold',
                      color:Color.YarB,
                      fontSize:13,
                      // alignSelf:'center',
                      left:255
                    }}
                    onPress={()=>navigation.navigate('Login')}
                    >
                      Sign in
                    </Text>
                   {/* <Text style={{top:225, position:'absolute', color:'black', fontSize:17,fontFamily:'OpenSans-Semibold'}} onPress={()=>navigation.navigate('Signup2')}>SIGN-UP WITH YOUR EMAIL</Text> */}
                  {/* <Text style={{top:200, fontSize:14, alignSelf:'center', }} >By singing up, you accept our t&cs and privacy policy</Text> */}
                  {/* <View style={{backgroundColor:Color.white, top:220}}> */}
                  {/* <Text style={{fontSize:20,  alignContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center', top:20}}>In publishing and graphic design, Lorem ipsum is a placeholder text  */}
                    {/* commonly used to demonstrate </Text> */}
                    {/* </View> */}
                  {/* <Text style={{}}>English</Text> */}
                    {/*<View style={{marginTop:200}}></View> */}
                  {/* <View> */}
                  {/* <DropDownPicker
    style={{top:180, width:350,height:70, alignSelf:'center', borderRadius:15, backgroundColor:Color.YarB, borderWidth:0}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={'Select type'}
      placeholderStyle={{color:Color.white, fontFamily:'SansBold'}}

    /> */}
                  {/* </View> */}
             </View>
      
    </SafeAreaView>
    
    </>
  )
}

const styles = StyleSheet.create({
  buttonText:{
    fontSize:40,
    fontFamily:'OpenSans-Bold',
    left:10,
    top:4,
    color:'white'
},
})