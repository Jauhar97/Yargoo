import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../config/Color';
import CurrentLocation from './CurrentLocation';
import {AuthContext} from '../../navigation/AuthProvider';
import {parseSync} from '@babel/core';
export default function Login({props, navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {setauthData} = useContext(AuthContext);

  const handleRegister = () => {
    setauthData({email: email, password: password});
    navigation.navigate('Profileinfo');
  };

  return (
    <SafeAreaView>
      <View>
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
          <Text style={styles.buttonText}>Signup</Text>
        </LinearGradient>
        <Text style={styles.headtext}>What your email and password</Text>
        <TextInput
          placeholder="Email"
          style={styles.texti1}
          onChangeText={userEmail => setEmail(userEmail)}></TextInput>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'grey'}
          onChangeText={userpassword => setPassword(userpassword)}
          style={styles.texti1}></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              top: 40,
              fontFamily: 'OpenSans-Semibold',
              color: 'black',
              fontSize: 13,
              left: 90,
            }}>
            Already have an account?
          </Text>
          <Text
            style={{
              top: 23,
              fontFamily: 'SansBold',
              color: Color.YarB,
              fontSize: 13,
              // alignSelf:'center',
              left: 255,
            }}
            onPress={() => navigation.navigate('Login')}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 350,
            height: 70,
            backgroundColor: Color.YarB,
            top: 60,
            borderRadius: 15,
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleRegister}>
          <Text
            style={{
              fontFamily: 'SansBold',
              color: Color.white,
              fontSize: 20,
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    fontFamily: 'OpenSans-Bold',
    left: 60,
    // top:-4,
    bottom: 25,
    color: 'white',
  },
  texti1: {
    backgroundColor: Color.lightgray,
    borderRadius: 15,
    top: 10,
    width: 350,
    alignSelf: 'center',
    marginTop: 40,
    padding: 10,
    fontFamily: 'SansBold',
  },
  headtext: {
    fontFamily: 'SansBold',
    fontSize: 25,
    color: 'black',
    left: 20,
    top: 20,
  },
});
