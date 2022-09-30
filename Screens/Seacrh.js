import { StyleSheet, Text, View , ImageBackground,TouchableWithoutFeedback,ScrollView,TextInput,Image ,FlatList, TouchableOpacity} from 'react-native'
import React, { Profiler } from 'react'
import Color from '../App/config/Color'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Card from '../App/Components/Card'


const CardData =[
  
    {
      id:1,
      username:'Jenifer',
      P1:'Abohar',
      P2:'Kokhar',
      t1:'10:50',
      t2:'11:30',
      price:'900',
      rate:'4.9',
      
      Profile:require('../App/assets/Pic2.png')
    },
    {
      id:2,
      username:'Ruhan',
      P1:'Mumbai',
      P2:'Karachi',
      t1:'08:20',
      t2:'07:50',
      price:'1500',
      rate:'4.0',
      Profile:require('../App/assets/Pic3.png'),
      
    },
    {
      id:3,
      username:'Furqan',
      P1:'Multan',
      P2:'Kaghan',
      t1:'02:00',
      t2:'10:30',
      price:'5000',
      rate:'4.3',
      Profile:require('../App/assets/Pic4.png')
    },
    {
      id:4,
      username:'Jauher',
      P1:'Karachi',
      P2:'Islamabad',
      t1:'05:50',
      t2:'06:30',
      price:'1000',
      rate:'4.1',
      Profile:require('../App/assets/Pic5.png')
    },

  
]

export default function Seacrh({prop, navigation}) {
 
  return (
    <View style={{backgroundColor:Color.white,flex:1}}>
        {/* <TextInput
    
     placeholderTextColor={Color.YarB}
     
     style={styles.texti1}
     >
    </TextInput> */}
    <View
    style={{
      backgroundColor:Color.lightgray,
    borderRadius:15,
    height:50,
    // left:-20,
    bottom:40,
    width:350,
    // right:50,
    alignSelf:'center',
    marginTop:80,
    padding:10,
    fontFamily:'SansBold'
    }}
    >

    </View>
    <Text onPress={()=>navigation.navigate('Searchpick')} style={{color:Color.YarB, fontFamily:'SansBold', fontSize:20, bottom:80, left:40}}>Choose pickup</Text>
    <LinearGradient start={{x: 0.5, y: 1.5}} end={{x:0.8, y: 0.2}} colors={['#0086CF','#4FA0A5']} style={{height:150,width:350, alignSelf:'center', borderRadius:20, bottom:30,  }}>
        <Text style={{color:Color.white, fontFamily:'SansBold', fontSize:20, left:70, top:20}}>Rides closer to you</Text>  
        <Text style={{color:Color.white, fontFamily:'SansBold', fontSize:15,top:37, maxWidth:250, left:70, }}>Now you can see which driver is closer to your location to pick up your package</Text>                      
        <View style={{width:50, height:50, borderRadius:25,borderWidth:2, borderColor:Color.white, bottom:20, left:10}}>
            <Feather name='box' color={Color.white} size={40} style={{top:3, left:3}}></Feather>
        </View>
        
    </LinearGradient>
    <FlatList
    showsHorizontalScrollIndicator={false}
    data={CardData}
    style={{bottom:50}}
    horizontal={true}
    keyExtractor={item=>item.id}
    renderItem={({item}) =>(
      <>
      <TouchableWithoutFeedback
      onPress={()=>navigation.navigate('CardOpen')}
      >
      <View style={{width:300, height:200, backgroundColor:Color.white, elevation:10, borderRadius:20, marginLeft:20,
        marginRight:10,
        alignSelf:'center',
        bottom:-20}}
        >
          <Text style={{position:'absolute',color:Color.YarB, left:30, top:30, fontFamily:'SansBold',fontSize:12}}>{item.t1}</Text>
          <Text style={{position:'absolute',color:Color.YarB, left:30, top:85, fontFamily:'SansBold',fontSize:12}}>{item.t2}</Text>
          <View style={{width:3, height:50, backgroundColor:Color.YarB,left:90,position:'absolute',top:45}}/>
            <View style={{width:20, height:20, borderRadius:10,  borderWidth:2, borderColor:Color.YarB,
             backgroundColor:Color.white,position:'absolute', top:85, left:82
            }}/>
            <View style={{width:20, height:20, borderRadius:10,  borderWidth:2, borderColor:Color.YarB,
             backgroundColor:Color.white,position:'absolute',top:30, left:82
            }}/>
        <Text style={
          {top:130, fontFamily:'SansBold', color:Color.YarB, fontSize:18, left:75}
        }>{item.username}</Text>
        <Image source={item.Profile} style={{width:50, height:50, borderRadius:25,top:130, left:10, position:'absolute'}}></Image>
        <AntDesign name='star' size={20} color={'#FFA500'} style={{bottom:20,left:110,position:'absolute'}}></AntDesign>
        <Text style={{position:'absolute',color:Color.YarB, bottom:15,left:75, fontFamily:'SansBold', fontSize:20}}>{item.rate}</Text>
        <Ionicons name='flash-outline' size={30} style={{left:250, bottom:30, position:'absolute'}}></Ionicons>
        <Text style={{fontFamily:'SansBold', fontSize:13, left:120,  color:Color.YarB}}>{item.P1}</Text>
            <View style={{flexDirection:'row', left:100,  }}>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:8, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.YarG,marginLeft:10, width:15, height:15, borderRadius:8, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:8, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                
            
            </View>
            <View style={{flexDirection:'row', left:100,top:45 }}>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.lightgray,marginLeft:10, width:15, height:15, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                <View style={{backgroundColor:Color.YarG,marginLeft:10, width:15, height:15, borderRadius:10, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                    <Feather name='box' color={'white'} style={{}}></Feather>
                </View>
                
            
            </View>
            <Text style={{fontFamily:'SansBold', fontSize:13, left:120, top:10, color:Color.YarB}}>{item.P2}</Text>
            <Text style={{left:260,bottom:80, fontFamily:'SansBold', fontSize:15, color:Color.YarB}}>{item.price}</Text>
        
      </View>
      </TouchableWithoutFeedback>
      </>
    )}
    ></FlatList>
    <View style={{backgroundColor:Color.white, width:'auto', }}>
    <Text style={{bottom:25, fontFamily:'SansBold', fontSize:20, left:20}}>16 Rides</Text>
        <View style={{width:395, height:1, backgroundColor:'black', bottom:20}}>
        
        </View>
        <Text style={{bottom:10, left:20, fontFamily:'SansBold'}}>3 Full Rides</Text>
        <Text style={{bottom:10, left:20, fontFamily:'SansBold'}}>16 Rides Available</Text>
        <Text style={{left:325, position:'absolute', top:15, fontFamily:'SansBold', color:Color.YarB, fontSize:20}}
        onPress={()=>navigation.navigate('Basicfilter')}
        >Filter</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  texti1:{
    backgroundColor:Color.lightgray,
    borderRadius:15,
    
    // left:-20,
    bottom:40,
    width:350,
    // right:50,
    alignSelf:'center',
    marginTop:80,
    padding:10,
    fontFamily:'SansBold'
},

})