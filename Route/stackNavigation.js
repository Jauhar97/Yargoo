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
import Seacrh from '../Screens/Search';
import Dropoff from '../App/Screen/Dropoff';
import Stop from '../App/Screen/Stop';
import Addstop from '../App/Screen/Addstop';
import Calender from '../App/Screen/Calender';
import Counter from '../App/Screen/Counter';
const Stack = createNativeStackNavigator();


const StackScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
                <Stack.Screen name='tabs' component={MyTabs}/>
                <Stack.Screen name='Signup' component={Signup}/>
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