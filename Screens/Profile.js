import React from 'react';
import { StyleSheet,
Text, 
View } from 'react-native';
import { Tab } from "@rneui/themed";
// import Color from '../App/config/Color';


export default function Profile() {
  return (
    // <View>
    //  <Tabs tabContainerStyle={{ elevation: 0, width:'90%', alignSelf:'center',marginTop:5,alignContent:'center' }} 
    //               tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 0,width:50,marginLeft:30,}}>
    //     <Tab
    //         tabStyle={{ backgroundColor:'white', }}
    //         activeTabStyle={{ backgroundColor: 'white', }}
    //         textStyle={{ color: '#030303', fontWeight: 'bold' }}
    //         activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
    //         heading={
    //           <TabHeading>
    //             <Icon></Icon>
    //           </TabHeading>
    //         }>
                    
    //         {/* <View>
    //            <Text>Furqan</Text>
    //            </View> */}
    //     </Tab>
    //     <Tab
    //                 tabStyle={{ backgroundColor: 'white' , }}
    //                 activeTabStyle={{ backgroundColor: 'white' , }}
    //                 textStyle={{ color: '#030303', fontWeight: 'bold',alignSelf:'center' }}
    //                 activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20,alignSelf:'center' }}
    //                 heading="Gigs">
    //                {/* <Text>hassan</Text> */}
    //     </Tab>            
    // </Tabs>
    // </View>
    <View>
      <Tab value={0} variant="primary" scrollable>
  <Tab.Item
    containerStyle={(active) => ({
      backgroundColor: active ? "red" : undefined,
    })}
  >
    Tab
  </Tab.Item>
  <Tab.Item
    buttonStyle={(active) => ({
      backgroundColor: active ? "red" : undefined,
    })}
  >
    Tab
  </Tab.Item>
</Tab>
    </View>
    
  );
};


