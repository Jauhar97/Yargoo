import React from 'react';
import { StyleSheet,
Text, 
View } from 'react-native';
import { Tab , TabView} from "@rneui/themed";
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient';
// import Color from '../App/config/Color';


export default function Profile() {
  const [index, setIndex] = React.useState(0);
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
<View style={{backgroundColor:'white', flex:1}}>
  <View
  style={{height:188}}
  >
    <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:250, }}>
                {/* <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Calender
                 </Text> */}
    </LinearGradient>
  </View>
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
        width:130,
        left:30
      }}
      
      variant='default'
    >
      <Tab.Item
        title="Details"
        titleStyle={{ fontSize: 15, fontFamily:'SansBold' }}
        // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Accounts"
        titleStyle={{ fontSize: 15,fontFamily:'SansBold' }}
        // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
      
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      
    </TabView>
  </>
    </View>
    
  );
};


