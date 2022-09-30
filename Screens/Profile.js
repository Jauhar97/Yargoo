import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Tab, TabView} from '@rneui/themed';
import Color from '../App/config/Color';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../navigation/AuthProvider';
import {Pressable} from 'react-native';

// import Color from '../App/config/Color';

export default function Profile({navigation}) {
  const [index, setIndex] = React.useState(0);
  const {logout} = useContext(AuthContext);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 195}}>
        <LinearGradient
          start={{x: 0.5, y: 1.5}}
          end={{x: 0.8, y: 0.2}}
          colors={['#0086CF', '#4FA0A5']}
          style={{height: 250}}>
          {/* <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Calender
                 </Text> */}
          <Text
            style={{
              fontFamily: 'SansBold',
              fontSize: 20,
              color: 'white',
              top: 20,
              left: 10,
            }}>
            Profile
          </Text>
          <Image
            style={{width: 150, height: 150, alignSelf: 'center'}}
            source={require('../App/assets/Picprofile.png')}></Image>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'SansBold',
              fontSize: 20,
              bottom: 20,
              color: Color.white,
            }}>
            Sagar
          </Text>
        </LinearGradient>
      </View>
      <>
        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
            width: 130,
            left: 30,
          }}
          variant="default">
          <Tab.Item
            title="Details"
            titleStyle={{fontSize: 15, fontFamily: 'SansBold'}}
            // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="Accounts"
            titleStyle={{fontSize: 15, fontFamily: 'SansBold'}}
            // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{width: '100%'}}>
            <View>
              <Text
                style={{
                  fontFamily: 'SansBold',
                  top: 10,
                  left: 10,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                About you
              </Text>
              <Text
                onPress={() => navigation.navigate('Bio')}
                style={{
                  fontFamily: 'OpenSans-Semibold',
                  top: 40,
                  left: 50,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                Write my mini bio
              </Text>
              <View
                style={{
                  width: 360,
                  height: 1,
                  backgroundColor: Color.lightgray,
                  top: 75,
                  alignSelf: 'center',
                }}></View>
              <Text
                style={{
                  fontFamily: 'SansBold',
                  top: 90,
                  left: 10,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                Verification
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans-Semibold',
                  top: 120,
                  left: 50,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                Verify my id
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans-Semibold',
                  top: 150,
                  left: 50,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                +91 8557932127
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans-Semibold',
                  top: 180,
                  left: 50,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                Verify Sagarsonil3@gmail.com
              </Text>
              <View
                style={{
                  width: 360,
                  height: 1,
                  backgroundColor: Color.lightgray,
                  top: 220,
                  alignSelf: 'center',
                }}></View>
              <Text
                style={{
                  fontFamily: 'SansBold',
                  top: 240,
                  left: 10,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                Car
              </Text>
              <Pressable
                onPress={() => navigation.navigate('License')}
                style={{
                  fontFamily: 'OpenSans-Semibold',
                  top: 260,
                  left: 50,
                  color: Color.YarB,
                  fontSize: 15,
                  position: 'absolute',
                }}>
                <Text>Add car</Text>
              </Pressable>
            </View>
            {/* <Text style={{fontFamily:'SansBold', top:90, left:50, color:Color.YarB, fontSize:15, position:'absolute'}}> Write My mini bio</Text> */}
          </TabView.Item>
          {/* <ScrollView horizontal={false} > */}
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <TabView.Item style={{width: '100%'}}>
              <View style={{height: 600}}>
                <Text
                  style={{
                    fontFamily: 'SansBold',
                    top: 10,
                    left: 10,
                    color: Color.YarB,
                    fontSize: 15,
                  }}>
                  Your stats
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 40,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Your rating
                </Text>
                <View
                  style={{
                    width: 360,
                    height: 1,
                    backgroundColor: Color.lightgray,
                    top: 60,
                    alignSelf: 'center',
                  }}></View>
                <Text
                  style={{
                    fontFamily: 'SansBold',
                    top: 90,
                    left: 10,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Setting
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 120,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Notification
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 150,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Change password
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 180,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Postal address
                </Text>
                <View
                  style={{
                    width: 360,
                    height: 1,
                    backgroundColor: Color.lightgray,
                    top: 200,
                    alignSelf: 'center',
                  }}></View>
                <Text
                  style={{
                    fontFamily: 'SansBold',
                    top: 240,
                    left: 10,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Money
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 270,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Available fund
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 295,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Payments
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 320,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Bank details
                </Text>
                {/* <View style={{width:360, height:1, backgroundColor:Color.lightgray, top:345 , alignSelf:'center'}}></View> */}
                <Text
                  style={{
                    fontFamily: 'SansBold',
                    top: 350,
                    left: 10,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  About
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 380,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Help
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 405,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  terms and condition
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 430,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Data protection
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Semibold',
                    top: 455,
                    left: 50,
                    color: Color.YarB,
                    fontSize: 15,
                    position: 'absolute',
                  }}>
                  Licenses
                </Text>
                <Text
                  style={{
                    fontFamily: 'SansBold',
                    top: 490,
                    alignSelf: 'center',
                    color: Color.YarB,
                    fontSize: 25,
                    position: 'absolute',
                  }}
                  onPress={() => logout()}>
                  Log out
                </Text>
              </View>
            </TabView.Item>
          </ScrollView>
          {/*    */}
        </TabView>
      </>
    </View>
  );
}
