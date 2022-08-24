import { StyleSheet, Text, View, Image,ScrollView , FlatList,SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import AntDesign from 'react-native-vector-icons/AntDesign'

// import {  } from 'native-base'
const Ongoing = [
    {
      id:1,
      username:'Jenifer',
      P1:'Abohar',
      P2:'Kokhar',
      Model:'Cultus/AwGn-150',
      Profile:require('../App/assets/Pic1.png')
    },
    {
        id:2,
        username:'Ferguson',
        P1:'Sehwan',
        P2:'karachi',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic2.png')
      },
      {
        id:3,
        username:'Meta',
        P1:'cant',
        P2:'N Karachi',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic3.png')
      },
      {
        id:4,
        username:'Micle',
        P1:'multan',
        P2:'lahore',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic4.png')
      },
      {
        id:5,
        username:'Asad',
        P1:'quetta',
        P2:'murree',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic5.png')
      },
      {
        id:6,
        username:'Abdullah',
        P1:'kaghan',
        P2:'Kokhar',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic6.png')
      },
      {
        id:7,
        username:'Furqan',
        P1:'kashmir',
        P2:'thar',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic1.png')
      },
      {
        id:8,
        username:'Jauher',
        P1:'karachi',
        P2:'islamabad',
        Model:'Cultus/AwGn-150',
        Profile:require('../App/assets/Pic2.png')
      },

]
export default function Ongoingrides({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:Color.white, flex:1}}>
        <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:70, }}>
                 <AntDesign onPress={()=>navigation.goBack()}
                 size={30}
                 style={{color:Color.white, top:20, left:10}}
                 name='arrowleft'
                 ></AntDesign>
                 <Text style={styles.buttonText}>
                    Ongoing rides
                 </Text>
        </LinearGradient>
        <View >
        <TextInput
          style={{backgroundColor:Color.lightgray, width:350, height:50, borderRadius:15,marginTop:20, position:'absolute',
                  alignSelf:'center',
                  
        }}
        placeholder='Search'
        placeholderTextColor={Color.white}

          >
            <AntDesign name='search1' size={30} color={Color.white} style={{left:50}}></AntDesign>

          </TextInput>
          <View style={{marginTop:70, }}>
         
        </View>
      <FlatList
      data={Ongoing}
      showsVerticalScrollIndicator={false}
    //   style={{alignSelf:'center'}}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <>
        {/* <View style={{width:'100%', height:'100%'}}> */}
        <View style={{flexDirection:'row', flex:1, padding:10, width:350, height:150,alignSelf:'center', backgroundColor:Color.white, elevation:10, marginTop:30, borderRadius:20}}>
      <Image style={styles.profile} source={item.Profile}/>
        <Text style={styles.name}>{item.username}</Text>
        <Text style={styles.model}>{item.Model}</Text>
        <Text style={styles.P1}>{item.P1}</Text>
        <View style={{width:1, height:75,top:20,left:280, backgroundColor:Color.darkgray}}></View>
        <Text style={styles.P2}>{item.P2}</Text>
        {/* <View style={{paddingTop:120,}}></View> */}
      </View>
        {/* </View> */}
        </>
      )}
      >

      </FlatList>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:30,
        fontFamily:'OpenSans-Bold',
        left:50,
        top:-14,
        color:'white'
    },
    profile:{
        width:50,
        height:50,
        borderRadius:25,
        top:10,
        left:10,
        position:'absolute'
    },
    name:{
        fontFamily:'SansBold',
        fontSize:15,
        top:90,
        textAlign:'left',
       left:15,
        position:'absolute'
    },
    P2:{
        fontFamily:'OpenSans-Regular',
        
        textAlign:'left',
        left:220,
        top:90,
        position:'absolute'
    },
    P1:{
        fontFamily:'OpenSans-Regular',
        textAlign:'left',
        left:222,
        top:25,
        position:'absolute'
    },
    model:{
        top:115,
        fontFamily:'SansBold',
        color:Color.YarB,
        textAlign:'left',
        left:15,
        position:'absolute'
    }
    
})