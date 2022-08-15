import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterInput from "react-native-counter-input";

export default function Counter() {
  return (
    <CounterInput
  onChange={(counter) => {
    console.log("onChange Counter:", counter);
  }}
/>
  )
}

const styles = StyleSheet.create({})