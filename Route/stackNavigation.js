import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrentLocation from '../App/Screen/CurrentLocation';
import Signup from '../App/Screen/Signup';
import Login from '../App/Screen/Login';
import Language from '../App/Screen/Language';
import MyTabs from './tabNavigation'
import Inbox from '../Screens/Inbox';
import Offer from '../Screens/Offer';
import Profile from '../Screens/Profile';
import Ride from '../Screens/Ride';
import Seacrh from '../Screens/Seacrh';
import Dropoff from '../App/Screen/Dropoff';
import Stop from '../App/Screen/Stop';
import Addstop from '../App/Screen/Addstop';
import Calender from '../App/Screen/Calender';
import Counter from '../App/Screen/Counter';
import Price from '../App/Screen/Price';
import Description from '../App/Screen/Description';
import Publish from '../App/Screen/Publish';
import Rideinfo from '../App/Screen/Rideinfo';
import CurrentRide from '../App/Screen/CurrentRide'
import Extrapackage from '../App/Screen/Extrapackage';
import Credentials from '../Sign up for driver/Credentials';
import Profileinfo from '../Sign up for driver/Profileinfo'
import License from '../Sign up for driver/License';
import Brand from '../Sign up for driver/Brand';
import Model from '../Sign up for driver/Model';
import Kind from '../Sign up for driver/Kind';
import Coluor from '../Sign up for driver/Coluor';
import ColorPicker from '../Sign up for driver/ColorPicker';
// import Datefilter from '../Screens/Datefilter';
import Basicfilter from '../Screens/Searchfilters/Basicfilter';
import CardOpen from '../Screens/Searchfilters/CardOpen';
// import Timefilter from '../Screens/Searchfilters/Timefilter';
import Card from '../App/Components/Card';
import ChatScreen from '../Screens/ChatScreen';
import Searchpick from '../Screens/Searchpick';
import Searchdrop from '../Screens/Searchdrop';
import Ongoingrides from '../Screens/Ongoingrides';
import Publishedrides from '../Screens/Publishedrides';
const Stack = createNativeStackNavigator();


const StackScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
                <Stack.Screen name='tabs' component={MyTabs}/>
                <Stack.Screen name='Signup' component={Signup}/>
                <Stack.Screen name='Searchpick' component={Searchpick}/>
                <Stack.Screen name='Ongoingrides' component={Ongoingrides}/>
                <Stack.Screen name='Publishedrides' component={Publishedrides}/>
                <Stack.Screen name='Searchdrop' component={Searchdrop}/>
                <Stack.Screen name='ChatScreen' component={ChatScreen}/>
                <Stack.Screen name='Card' component={Card}/>
                <Stack.Screen name='Credentials' component={Credentials}/>
                <Stack.Screen name='CardOpen' component={CardOpen}/>
                {/* <Stack.Screen name='Timefilter' component={Timefilter}/> */}
                <Stack.Screen name='Profileinfo' component={Profileinfo}/>
                <Stack.Screen name='Basicfilter' component={Basicfilter}/>
                {/* <Stack.Screen name='Datefilter' component={Datefilter}/> */}
                <Stack.Screen name='License' component={License}/>
                <Stack.Screen name='Brand' component={Brand}/>
                <Stack.Screen name='Model' component={Model}/>
                <Stack.Screen name='Kind' component={Kind}/>
                <Stack.Screen name='Coluor' component={Coluor}/>
                <Stack.Screen name='ColorPicker' component={ColorPicker}/>
                <Stack.Screen name='Extrapackage' component={Extrapackage}/>
                <Stack.Screen name='CurrentRide' component={CurrentRide}/>
                <Stack.Screen name='Rideinfo' component={Rideinfo}/>
                <Stack.Screen name='Publish' component={Publish}/>
                <Stack.Screen name='Description' component={Description}/>
                <Stack.Screen name='Price' component={Price}/>
                <Stack.Screen name='Counter' component={Counter}/>
                <Stack.Screen name='Calender' component={Calender}/>
                <Stack.Screen name='Addstop' component={Addstop}/>
                <Stack.Screen name='Stop' component={Stop}/>
                <Stack.Screen name='Dropoff' component={Dropoff}/>
                <Stack.Screen name='Inbox' component={Inbox}/>
                <Stack.Screen name='Offer' component={Offer}/>
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='Ride' component={Ride}/>
                <Stack.Screen name='Seacrh' component={Seacrh}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='CurrentLocation' component={CurrentLocation}/>
                <Stack.Screen name='Language' component={Language}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default  StackScreen