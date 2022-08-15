import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Color from '../config/Color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Calender({props, navigation}) {{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       selectedStartDate: null,
    //     };
    //     this.onDateChange = this.onDateChange.bind(this);
    //   }
    
    //   onDateChange(date) {
    //     this.setState({
    //       selectedStartDate: date,
    //     });
    //   }
 
    // const { selectedStartDate } = this.state;
    // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return(
        <View style={styles.container}>
            <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Calender
                 </Text>
            </LinearGradient>
            <View
            style={styles.Calender}
            >
                <CalendarPicker
                
                //   onDateChange={this.onDateChange}
                  todayBackgroundColor={Color.YarG}
                  selectedDayColor={Color.YarB}
                />
            </View>
            <View style={{width:50, height:50, backgroundColor:Color.YarB, borderRadius:25, left:330, top:20}}
            onStartShouldSetResponder={()=> navigation.navigate('Counter')}
            >
                <AntDesign name='arrowright' color={'white'} size={30} style={{top:10, left:10}}></AntDesign>
            </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        // marginTop: 100,
      },
    Calender:{
    //    top:100,

      },
      buttonText:{
        fontSize:40,
        fontFamily:'OpenSans-Bold',
        left:45,
        // top:-4,
        bottom:25,
        color:'white'
    },

})