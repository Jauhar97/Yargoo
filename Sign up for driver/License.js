import { StyleSheet, Text, View , TextInput} from 'react-native'
import React,{useState} from 'react'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DropDownPicker from 'react-native-dropdown-picker'

export default function License() {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'paksitan', value: 'pak'},
    {label: 'India', value: 'in'},
    {label: 'canada', value: 'can'},
    {label: 'france', value: 'france'}
  ]);
  return (
    <>
    <View style={{backgroundColor:Color.white, flex:1}}>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Car details
                 </Text>
        </LinearGradient>
        <Text
        style={{fontFamily:'SansBold', fontSize:30, color:Color.YarB, left:15, top:10}}
        >What is your License plate number?</Text>
        <View>
        <Text
        style={{ fontSize:18, color:Color.YarB,left:15,maxWidth:350, top:20, backgroundColor:'white'}}
        >We will share it with those who will book a delivery ride</Text>
</View>
<DropDownPicker
    style={{top:50, width:370, alignSelf:'center',  borderBottomWidth:1, }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={'Country'}
      placeholderStyle={{color:Color.darkgray, fontFamily:'SansBold'}}
      // containerStyle={{backgroundColor:Color.darkgray}}

    />
    </View>
     <TextInput
     placeholder='Plate number'
     style={styles.texti1}
     >

</TextInput>
<View style={{width:190, height:70, backgroundColor:Color.YarB,alignSelf:'center', bottom:200, borderRadius:50}}
        onStartShouldSetResponder={()=>navigation.navigate('Publish')}
        >
                <Text style={{alignSelf:'center', top:20, fontFamily:'SansBold',fontSize:20 , color:Color.white}}>Continue</Text>
            </View>
</>
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
       bottom:280,
        width:350,
        alignSelf:'center',
        marginTop:40,
        padding:10,
        fontFamily:'SansBold'
    },
})