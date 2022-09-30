import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import DropDownPicker from 'react-native-dropdown-picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Color from '../App/config/Color'
import { color } from 'react-native-reanimated'


export default function Credentials({prop, navigation}) {

    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'paksitan', value: 'pak'},
    {label: 'India', value: 'in'},
    {label: 'canada', value: 'can'},
    {label: 'france', value: 'france'}
  ]);
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
        <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
            <Text style={styles.buttonText}>
                Profile
            </Text>
    </LinearGradient>
    <Text style={{fontFamily:'SansBold', fontSize:20, color:'black', top:20, left:10}}>Email</Text>
    <TextInput
             placeholder='Email'
             style={styles.texti1}
             >

    </TextInput>
    <Text style={{fontFamily:'SansBold', fontSize:20, color:'black', top:50, left:10}}>Mobile number</Text>
    <DropDownPicker
    style={{top:90, width:350, alignSelf:'center', borderRadius:15, backgroundColor:Color.lightgray, borderWidth:0}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={'country'}
      placeholderStyle={{color:Color.darkgray, fontFamily:'SansBold'}}

    />
    <TextInput
             placeholder='Password'
             placeholderTextColor={'grey'}
             style={styles.texti2}
             >
    </TextInput>
    <View style={{width:350, height:50, backgroundColor:Color.YarB, borderRadius:15, top:200, alignSelf:'center', alignItems:'center'}}
    onStartShouldSetResponder={()=>navigation.navigate('Profileinfo')}
    >
        <Text style={{color:Color.white, fontFamily:'SansBold', fontSize:20, top:10}}>
            Save credentials
        </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:40,
        fontFamily:'OpenSans-Bold',
        left:40,
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
    texti2:{
        backgroundColor:Color.lightgray,
        borderRadius:15,
        top:100,
        width:350,
        alignSelf:'center',
        marginTop:40,
        padding:10,
        fontFamily:'SansBold'
    }
})