import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../App/config/Color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo';
import firebase from '@react-native-firebase/firestore';
import {useVehicleContext} from './VehicleContext';

export default function Model({prop, navigation}) {
  const {setData} = useVehicleContext();

  const Data = [
    {
      id: 1,
      brand: 'POLO',
    },
    {
      id: 2,
      brand: 'PASSAT',
    },
    {
      id: 3,
      brand: 'GOLF',
    },
    {
      id: 4,
      brand: '181',
    },
    {
      id: 5,
      brand: '183',
    },
  ];

  const onPressButton = Value => {
    setData(prev => ({...prev, Model: Value}));
    navigation.navigate('Kind');
  };

  return (
    <View style={{backgroundColor: Color.white, flex: 1}}>
      <LinearGradient
        start={{x: 0.5, y: 1.5}}
        end={{x: 0.8, y: 0.2}}
        colors={['#0086CF', '#4FA0A5']}
        style={{height: 70}}>
        <AntDesign
          name="arrowleft"
          color={'white'}
          size={30}
          style={{top: 20, left: 10}}></AntDesign>
        <Text style={styles.buttonText}>Car details</Text>
      </LinearGradient>
      <View>
        <Text
          style={{
            fontFamily: 'SansBold',
            fontSize: 30,
            color: Color.YarB,
            left: 15,
            top: 10,
          }}>
          What's your vehicle's model ?
        </Text>
      </View>
      <View>
        <TextInput placeholder="Plate number" style={styles.texti1}></TextInput>
      </View>
      <FlatList
        data={Data}
        keyExtractor={item => item.brand}
        renderItem={({item}) => (
          <>
            {/* <TouchableOpacity> */}
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 100}}>
                <TouchableOpacity onPress={() => onPressButton(item.brand)}>
                  <Text style={styles.text}>{item.brand}</Text>
                </TouchableOpacity>
              </View>
              <Entypo
                name="chevron-right"
                size={30}
                color={Color.YarB}
                style={{left: 240, top: 9}}
              />
            </View>
            {/* </TouchableOpacity> */}
          </>
        )}></FlatList>
      {/* <Text style={{fontFamily:'SansBold', fontSize:30, color:Color.YarB, left:60, bottom:40}}>OR</Text> */}
      {/* <Text style={{fontFamily:'SansBold', fontSize:20, color:Color.darkgray, left:25, bottom:20}}>Popular makes</Text> */}
      {/* <View style={{flexDirection:'row',}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Polo</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:305, top:5 }}
        onPress={()=>navigation.navigate('Kind')}
        ></AntDesign>
    </View>
    <View style={{flexDirection:'row', margintop:10}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Passat</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:284, top:5 }}></AntDesign>
    </View>
    {/* <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Honda</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:282, top:5 }}></AntDesign>
    </View> */}
      {/* <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>Golf</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:308, top:5 }}></AntDesign>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>181</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:315, top:5 }}></AntDesign>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'SansBold', fontSize:20, left:25, color:Color.YarB}}>183</Text>
        <AntDesign name='right' color={Color.YarB} size={20} style={{left:315, top:5 }}></AntDesign>
    </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    left: 20,
    padding: 10,
    color: Color.YarB,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'SansBold',
    left: 45,
    top: -18,
    bottom: 25,
    color: 'white',
  },
  texti1: {
    backgroundColor: Color.lightgray,
    borderRadius: 15,

    // left:-20,
    bottom: 40,
    width: 350,
    // right:50,
    alignSelf: 'center',
    marginTop: 80,
    padding: 10,
    fontFamily: 'SansBold',
  },
});
