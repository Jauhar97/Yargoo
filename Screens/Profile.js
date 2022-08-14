import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header, Item, Input, Button, Tab, Tabs } from 'native-base';
import Color from '../App/config/Color';


 function Profile() {
  return (
    <View>
     <Tabs tabContainerStyle={{ elevation: 0, width:'90%', alignSelf:'center',marginTop:5,alignContent:'center' }} 
                  tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 0,width:50,marginLeft:30,}}>
        <Tab
            tabStyle={{ backgroundColor:Color.white, }}
            activeTabStyle={{ backgroundColor: Color.white, }}
            textStyle={{ color: '#030303', fontWeight: 'bold' }}
            activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
            heading="About">
                    
                        
               <Text>Furqan</Text>
        </Tab>
        <Tab
                    tabStyle={{ backgroundColor: Color.white , }}
                    activeTabStyle={{ backgroundColor: Color.white , }}
                    textStyle={{ color: '#030303', fontWeight: 'bold',alignSelf:'center' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20,alignSelf:'center' }}
                    heading="Gigs">
                   <Text>hassan</Text>
        </Tab>            
    </Tabs>
    </View>
  )
}
export default Profile

const styles = StyleSheet.create({
    
})