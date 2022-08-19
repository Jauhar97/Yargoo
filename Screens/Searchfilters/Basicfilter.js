import { StyleSheet, Text, View , Button,} from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Color from '../../App/config/Color'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Basicfilter({prop,navigation}) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const handleTimeConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <>
    
    <View>
    <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                <AntDesign name='arrowleft' color={'white'} size={30} style={{top:20, left:10}}></AntDesign>
                 <Text style={styles.buttonText}>
                    Price
                 </Text>
        </LinearGradient>
       <Text onPress={showDatePicker} style={{fontFamily:'SansBold', fontSize:25,color:Color.YarB,top:50, left:20}}>Date Filter</Text>
    {/* <Button title="Show Date filter"  styles={{}} /> */}
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      textColor={Color.YarB}
      mode="date"
      accentColor={Color.YarB}
      onConfirm={handleDateConfirm}
      onCancel={hideDatePicker}
    />
   
  </View>
  <View>
  <Text onPress={showTimePicker} style={{fontFamily:'SansBold', fontSize:25, color:Color.YarB,top:70, left:20}}>Time Filter</Text>
  {/* <Button title="Show Time filter" onPress={showTimePicker} /> */}
  <DateTimePickerModal
    
      isVisible={isTimePickerVisible}
      mode="time"
      onConfirm={handleTimeConfirm}
      onCancel={hideTimePicker}
    />
  </View>
  <View style={{width:300, height:50, borderRadius:30, backgroundColor:Color.YarB, alignContent:'center',alignItems:'center',justifyContent:'center', top:200, alignSelf:'center'}}
  onStartShouldSetResponder={()=>navigation.goBack()}
  >
    <Text style={{color:'white', fontFamily:'SansBold',fontSize:20 }}>Apply Filters</Text>
  </View>
  </>
  )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:40,
        fontFamily:'OpenSans-Bold',
        left:60,
        // top:-4,
        bottom:25,
        color:'white'
    },
})