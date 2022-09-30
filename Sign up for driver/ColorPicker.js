import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import Color from '../App/config/Color';
import {RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';
import {useVehicleContext} from './VehicleContext';
import {useEffect} from 'react';

export default function ColorPicker({prop, navigation}) {
  const {user} = useContext(AuthContext);
  const {data, setData} = useVehicleContext();

  const Data = [
    {
      id: 1,
      text: '1',
    },
  ];
  const [checked, setChecked] = React.useState('first');

  const handleSubmit = async () => {
    await firestore()
      .collection('vehicles-2')
      .doc(user?.uid)
      .collection('list')
      .add({
        ...data,
      })
      .then(id => {
        firestore()
          .collection('vehicles-2')
          .doc(user?.uid)
          .collection('list')
          .doc(id.id)
          .update({
            id: id.id,
          });
      });
    navigation.navigate('tabs');
    // navigation.navigate("Profile")
  };

  useEffect(() => {
    switch (checked) {
      case 'first':
        setData(prev => ({...prev, Color: Color.YarB}));
        break;
      case 'sec':
        setData(prev => ({...prev, Color: Color.YarG}));
        break;
      case 'third':
        setData(prev => ({...prev, Color: Color.white}));
        break;
      case 'four':
        setData(prev => ({...prev, Color: 'Black'}));
        break;
      case 'five':
        setData(prev => ({...prev, Color: Color.darkgray}));
        break;
      default:
        break;
    }
  }, [checked]);

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
          What's color of your vehicle ?
        </Text>
      </View>
      {/* <FlatList
        data={Data}
        keyExtractor={item => item.text}
        renderItem={({item}) => (
          <>
            //  <TouchableOpacity>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={{width: 100}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', backgroundColor: 'red'}}
                  onPress={handleSubmit}>
                  <View
                    style={{
                      left: 20,
                      top: 30,
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: Color.YarB,
                      elevation: 10,
                    }}></View>
                  <View style={{left: 300, top: 20}}>
                    <RadioButton.Android
                      style={{height: 100}}
                      uncheckedColor={'black'}
                      color={'black'}
                      value="first"
                      status={checked === 'first' ? 'checked' : 'setChecked'}
                      onPress={() => setChecked('first')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Entypo
                name="chevron-right"
                size={30}
                color={Color.YarB}
                style={{left: 240, top: 9}}
              />
            </View>
            // <TouchableOpacity>
          </>
        )}></FlatList> */}
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: Color.YarB,
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'first' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('first')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 20}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: Color.YarG,
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'sec' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('sec')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 40}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: Color.white,
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'third' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('third')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 60}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'black',
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'four' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('four')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 80}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: Color.darkgray,
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'five' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('five')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 100}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'red',
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'six' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('six')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 120}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'pink',
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'seven' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('seven')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', top: 140}}>
        <View
          style={{
            left: 20,
            top: 30,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'purple',
            elevation: 10,
          }}></View>
        <View style={{left: 300, top: 20}}>
          <RadioButton.Android
            style={{height: 100}}
            uncheckedColor={'black'}
            color={'black'}
            value="first"
            status={checked === 'eight' ? 'checked' : 'setChecked'}
            onPress={() => setChecked('eight')}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: 250,
          height: 60,
          backgroundColor: Color.YarB,
          borderRadius: 30,
          top: 190,
          alignSelf: 'center',
        }}
        onStartShouldSetResponder={handleSubmit}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SansBold',
            alignSelf: 'center',
            top: 8,
            fontSize: 30,
          }}>
          Save
        </Text>
      </View>
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
});
