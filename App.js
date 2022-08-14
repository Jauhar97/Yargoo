import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Language from './App/Screen/Language'
import Basicscreen from './App/Components/Basicscreen'
import Signup from './App/Screen/Signup'
import Login from './App/Screen/Login'
import CurrentLocation from './App/Screen/CurrentLocation'
import StackScreen from './Route/stackNavigation'

export default function App() {
  return (
  //  <Signup></Signup>
  <StackScreen></StackScreen>
  // 
//  <Language></Language>
  // <CurrentLocation/>
  )
}

const styles = StyleSheet.create({


})