import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../App/config/Color'
import { RadioButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ColorPicker({prop, navigation}) {
    const [checked, setChecked] = React.useState('first');
  return (
    <View style={{backgroundColor:Color.white, flex:1}}>
      <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
           <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
            <Text style={styles.buttonText}>
               Car details
            </Text>
    </LinearGradient>
    <View>
   <Text  style={{fontFamily:'SansBold', fontSize:30, color:Color.YarB, left:15, top:10}}>What's color of your vehicle ?</Text>
    </View>
    <TouchableOpacity
    style={{flexDirection:'row'}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:Color.YarB, elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'first' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('first')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:20}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:Color.YarG,elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'sec' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('sec')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:40}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:Color.white,elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'thi' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('thi')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:60}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:'black', elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'four' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('four')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:80}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:Color.darkgray,elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'five' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('five')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:100}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:'red',elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'six' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('six')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:120}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:'pink', elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'seven' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('seven')}
    />
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    style={{flexDirection:'row', top:140}}
    >
        <View  
        style={{left:20,top:30,width:30, height:30, borderRadius:15, backgroundColor:'purple',elevation:10}}
        >

        </View>
    <View style={{left:300, top:20}}>
    <RadioButton.Android
           style={{height: 100}}
           uncheckedColor={"black"}
           color={'black'}
           value="first"
           status={ checked === 'eight' ? 'checked' : 'setChecked' }
           onPress={() => setChecked('eight')}
    />
    </View>
    </TouchableOpacity>
    <View
    style={{width:250, height:60, backgroundColor:Color.YarB,borderRadius:30, top:190, alignSelf:'center'}}
    onStartShouldSetResponder={()=>navigation.navigate('Profile')}
    >
        <Text style={{color:'white', fontFamily:'SansBold', alignSelf:'center', top:8, fontSize:30}}>Save</Text>

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