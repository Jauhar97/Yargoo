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

const Stack = createNativeStackNavigator();


const StackScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
                <Stack.Screen name='tabs' component={MyTabs}/>
                <Stack.Screen name='Signup' component={Signup}/>
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