import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrentLocation from '../App/Screen/CurrentLocation';
import Signup from '../App/Screen/Signup';
import Login from '../App/Screen/Login';
import Language from '../App/Screen/Language';
import MyTabs from '../Route/tabNavigation'
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
import ProfileforUser from '../Sign up for User/ProfileforUser'
import Credentialforuser from '../Sign up for User/Credentialforuser'
import Bio from '../Screens/Bio';
import Signup2 from '../App/Screen/Signup2';
const Stack = createNativeStackNavigator();


const AppStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
               
                
                <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
                <Stack.Screen name='Signup2' component={Signup2}></Stack.Screen>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='MyTabs' component={MyTabs}></Stack.Screen>
                
                <Stack.Screen name='Language' component={Language}></Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default  AppStack;