import { StyleSheet, Text, View , TextInput,KeyboardAvoidingView, ScrollView} from 'react-native'
import React,{ useState, Component} from 'react'
import Color from '../App/config/Color'
import firestore from '@react-native-firebase/firestore';


import auth from '@react-native-firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker'
import {
  Dropdown }
  from 'react-native-material-dropdown';


class Profileinfo extends React.Component {


  constructor(props){
    super(props);

    this.state={
      fname:'',
      lname:'',
      gender:'',
      dateofbirth:'',
      Textbio:'',
      data:'',

    }
    
  }
  onChangeTextfName = (Fname) =>{
    this.setState({fname:Fname});
  }

  onChangeTextlName = (Lname) =>{
    this.setState({lname:Lname});
  }

  onChangeTextgender = (Gender) =>{
    this.setState({gender:Gender});
  }
  onChangeDateofbirth = (dateofbirth) =>{
    this.setState({dateofbirth:dateofbirth});
  }
  onChangeTextbio = (Textbio) =>{
    this.setState({Textbio:Textbio});
  }
 

onPressButton = () =>{
  

  
   
  
    firestore()
    .collection('App-User')
    
    .add({
      Fname: this.state.fname,
      Lname: this.state.lname,
      Gender: this.state.gender,
      dateofbirth:this.state.dateofbirth,
      Textbio:this.state.Textbio,
      
    })
    
    .then(() => {
      this.props.navigation.navigate('Brand')
    });
  
   
  
  }
  // pressnav=(navigation)=>{
  //     this.props.navigation.navigate('Brand')
  // }
  
  
  
render() {
  
  
  // let data =[
  //   {
  //     value : 'banana'
  //   },
  //   {
  //     value:'apple'
  //   }
  // ]
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <KeyboardAvoidingView>
        {/* <ScrollView> */}
     <View style={{width:70, height:70, borderRadius:35, backgroundColor:Color.lightgray, elevation:5,left:40, top:50}}/>
     <Text style={{fontFamily:'OpenSans-Semibold', fontSize:20, color:Color.YarB, left:150,}}>Add profile picture</Text>
    <View>
      <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.lightgray, left:10, top:50}}>About you </Text>
      <TextInput
             placeholder='First name'
             onChangeText={this.onChangeTextfName}
             style={styles.texti1}
             keyboardType={'phone-pad'}
             >

    </TextInput>
    <TextInput
             placeholder='Last name'
             onChangeText={this.onChangeTextlName}
             style={styles.texti1}
             >

    </TextInput>
    <TextInput
             placeholder='Gender'
             onChangeText={this.onChangeTextgender}
             style={styles.texti1}
             >

    </TextInput>
    <TextInput
             placeholder='date of birth'
             onChangeText={this.onChangeDateofbirth}
             style={styles.texti1}
             >

    </TextInput>
    <TextInput
             placeholder='Your Bio'
             onChangeText={this.onChangeTextbio}
             style={styles.texti1}
             >

    </TextInput>
    </View>
    {/* <View> */}
      {/* <Dropdown
      label='favouruite food'
      data={data}
      ></Dropdown> */}
    {/* <DropDownPicker
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

    /> */}
    
    {/* </View> */}
    <View 
    onStartShouldSetResponder = {this.onPressButton }
    style={{width:350, height:50, backgroundColor:Color.YarB, borderRadius:15, top:40, alignSelf:'center', alignItems:'center'}}
    // onStartShouldSetResponder={()=>navigation.navigate('License')}
   
    >
        <Text 
         onPress={ this.pressnav}
        style={{color:Color.white, fontFamily:'SansBold', fontSize:20, top:10}}>
            Save credentials
        </Text>
    </View>
    {/* </ScrollView> */}
    </KeyboardAvoidingView>
    </View>
    );
  };
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
},
});
export default Profileinfo;