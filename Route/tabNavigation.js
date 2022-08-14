import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Image, StyleSheet } from 'react-native';

import Inbox from '../Screens/Inbox';
import Offer from '../Screens/Offer';
import Profile from '../Screens/Profile';
import Ride from '../Screens/Ride';
import Search from '../Screens/Search';


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {

  const Inboxp = require('../App/assets/Inbox.png')
  const Offerp = require('../App/assets/Offer.png')
  const Profilep = require('../App/assets/Profile.png')
  const Ridep = require('../App/assets/Ride.png')
  const Searchp = require('../App/assets/Search.png')

  return (
    <Tab.Navigator  barStyle={{
      backgroundColor:'#ffffff',
    
      height:70
    }}>
      <Tab.Screen 
          name="Ride" 
          component={Ride} 
          options={{
            tabBarLabel:false,
            tabBarIcon: ({focused, tintColor}) => (
              <Image 
              style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
              source={Ridep} />
            ),
          }}
      />
      <Tab.Screen 
      name="Search" 
      component={Search} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={Searchp} />
        ),
      }}/>
      <Tab.Screen 
      name="Offer" 
      component={Offer} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={Offerp} />
        )
      }}
      />
      <Tab.Screen 
      name="Inbox" 
      component={Inbox} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={Inboxp} />
        ),
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={Profilep} />
        ),
      }
    }
      />
    </Tab.Navigator>
   
  );
}
export default MyTabs

const styles = StyleSheet.create({
  image:{
    width: 30, 
    height: 30,
    // sbottom:10,
    color:'black'
  }
})