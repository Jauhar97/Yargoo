import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RadioButton } from 'react-native-paper';
import Color from '../config/Color';
export default function Language() {
    const [checked, setChecked] = React.useState('first');
    
  return (
    <>
    <SafeAreaView style={styles.container}>
    <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
        <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
            <Text style={styles.buttonText}>
                Login
            </Text>
    </LinearGradient>
      <TouchableOpacity
         style={[styles.answer, {flexDirection:'row'}]}
        //  key={index}
        //  onPress={() => handleOptionPress(answer.id, index)}
        >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black', top:20, left:10}}>Brazil</Text>
         <View style={{left:250,top:20}}>
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
    </SafeAreaView>
    <View>
    
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>Czech koruna </Text>
        <View style={{left:130,top:20}}>
        <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>Deutcheland </Text>
        <View style={{left:141,top:25}}>
        <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>Spain </Text>
        <View style={{left:245,top:25}}>
        <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fourth')}
      />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>France </Text>
        <View style={{left:230,top:25}}>
        <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fifth')}
      />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>Croatian Kuna </Text>
        <View style={{left:125,top:25}}>
        <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'sixth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('sixth')}
      />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>India</Text>
        <View style={{left:264,top:25}}>
        <RadioButton.Android
        style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'sventh' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('sventh')}
      />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
     style={[styles.answer, {flexDirection:'row'}]}
    >
        <Text style={{fontFamily:'OpenSans-Regular', fontSize:30, color:'black',top:20, left:10}}>Italy </Text>
        <View style={{left:269,top:25}}>
        <RadioButton.Android
        // style={{height: 100}}
        value="second"
        uncheckedColor={"black"}
        color={'black'}
        status={ checked === 'eight' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('eight')}
      />
      </View>
    </TouchableOpacity>
    <View style={{width:320, height:60,backgroundColor:Color.YarB,alignSelf:'center', borderRadius:30, top:150}}>
        <Text style={{alignSelf:'center', color:Color.white, fontFamily:'SansBold', fontSize:25,top:10}}>Choose</Text>
    </View>
    </View>
    </>
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
})