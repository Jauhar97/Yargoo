import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function basicscreen({props, headtext, children}) {
  return (
    // <View style={{flex:1}}>
        <SafeAreaView style={styles.background}>
            <View style={{flex:1}}>{children}
            <LinearGradient start={{x: 0.5, y: 1}} end={{x:1, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <Text style={styles.buttonText}>
                    {headtext}
               </Text>
            </LinearGradient>
            </View>
        </SafeAreaView>
    // </View> 
  )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:40,
        fontFamily:'OpenSans-Bold',
        left:10,
        top:4,
        color:'white'
    },
    background:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center'
    }
})