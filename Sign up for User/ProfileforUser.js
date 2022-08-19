import { StyleSheet, Text, View , TextInput} from 'react-native'
import React,{ useState} from 'react'
import Color from '../App/config/Color'
import DropDownPicker from 'react-native-dropdown-picker'

export default function ProfileforUser({prop, navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '2000', value: '1'},
    {label: '2001', value: '2'},
    {label: '2002', value: '3'},
    {label: '2003', value: '4'},
    {label: '2004', value: '5'},
    {label: '2005', value: '6'},
    {label: '2006', value: '7'},
    {label: '2007', value: '8'},
    {label: '2008', value: '9'},
    {label: '2009', value: '10'},
    {label: '2010', value: '11'},
    {label: '2011', value: '12'},
    {label: '2012', value: '13'},
    {label: '2013', value: '14'},
    {label: '2014', value: '15'},
    {label: '2015', value: '16'},
    {label: '2016', value: '17'},
    {label: '2017', value: '18'},
    {label: '2018', value: '19'},
    {label: '2019', value: '20'},
    {label: '2020', value: '21'},
    {label: '2021', value: '22'},
    {label: '2022', value: '23'},

  ]);
  return (
    <View style={{backgroundColor:'white', flex:1}}>
     <View style={{width:70, height:70, borderRadius:35, backgroundColor:Color.lightgray, elevation:5,left:40, top:50}}/>
     <Text style={{fontFamily:'OpenSans-Semibold', fontSize:20, color:Color.YarB, left:150,}}>Add profile picture</Text>
    <View>
      <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.lightgray, left:10, top:50}}>About you </Text>
      <TextInput
             placeholder='First name'
             style={styles.texti1}
             >

    </TextInput>
    <TextInput
             placeholder='Last name'
             style={styles.texti1}
             >

    </TextInput>
    <TextInput
             placeholder='Gender'
             style={styles.texti1}
             >

    </TextInput>
    </View>
    <View>
    <DropDownPicker
    style={{top:50, width:370, alignSelf:'center', borderRadius:15, backgroundColor:Color.lightgray, borderWidth:0}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={'Date of birth'}
      placeholderStyle={{color:Color.darkgray, fontFamily:'SansBold'}}
      // containerStyle={{backgroundColor:Color.darkgray}}

    />
    <TextInput
             placeholder='Your Bio'
             style={styles.texti2}
             >

    </TextInput>
    </View>
    <View style={{width:350, height:50, backgroundColor:Color.YarB, borderRadius:15, top:90, alignSelf:'center', alignItems:'center'}}
    onStartShouldSetResponder={()=>navigation.navigate('License')}
    >
        <Text style={{color:Color.white, fontFamily:'SansBold', fontSize:20, top:10}}>
            Save credentials
        </Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  texti1:{
    // backgroundColor:Color.lightgray,
    // borderRadius:15,?
    borderBottomWidth:1,
    borderBottomColor:Color.lightgray,
    top:10,
    width:370,
    alignSelf:'center',
    marginTop:40,
    padding:10,
    fontFamily:'SansBold'
},
texti2:{
  borderBottomWidth:1,
  borderBottomColor:Color.lightgray,
  top:40,
  width:370,
  alignSelf:'center',
  marginTop:40,
  padding:10,
  fontFamily:'SansBold'
}
})