import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Color from '../App/config/Color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo';
import {Value} from 'react-native-reanimated';
import {useVehicleContext} from './VehicleContext';
import {AuthContext} from '../navigation/AuthProvider';
// import firebase from '@react-native-firebase';

export default function Brand({prop, navigation}) {
  const {data, setData} = useVehicleContext();
  const {logout} = useContext(AuthContext);

  const Data = [
    {
      id: 1,
      brand: 'Maruti',
    },
    {
      id: 2,
      brand: 'Hyundai',
    },
    {
      id: 3,
      brand: 'Honda',
    },
    {
      id: 4,
      brand: 'Ford',
    },
    {
      id: 5,
      brand: 'Tata',
    },
    {
      id: 6,
      brand: 'More',
    },
  ];

  const onPressButton = Value => {
    setData(prev => ({...prev, Brand: Value}));
    navigation.navigate('Model');
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
          What's your vehicle's brand
        </Text>
      </View>
      <View>
        <AntDesign
          name="search1"
          size={30}
          style={{top: 30, left: 20}}></AntDesign>
        <TextInput placeholder="Search" style={styles.texti1}></TextInput>
      </View>
      <Text
        style={{
          fontFamily: 'SansBold',
          fontSize: 30,
          color: Color.YarB,
          left: 60,
          bottom: 40,
        }}>
        OR
      </Text>
      <Text
        style={{
          fontFamily: 'SansBold',
          fontSize: 20,
          color: Color.darkgray,
          left: 25,
          bottom: 20,
        }}>
        Popular makes
      </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    fontFamily: 'SansBold',
    left: 45,
    top: -18,
    bottom: 25,
    color: 'white',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    left: 20,
    padding: 10,
    color: Color.YarB,
  },
  texti1: {
    // backgroundColor:Color.lightgray,
    // borderRadius:15,?
    borderBottomWidth: 1,
    borderBottomColor: Color.lightgray,
    left: 20,
    bottom: 55,
    width: 280,
    alignSelf: 'center',
    marginTop: 40,
    padding: 10,
    fontFamily: 'SansBold',
  },
});
