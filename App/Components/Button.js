import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../config/Color'

export default function Button({props, Style}) {
  return (
    <View style={[Style,styles.container]}>
      <Text>ddd</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
        borderRadius:20,
     
    }
})