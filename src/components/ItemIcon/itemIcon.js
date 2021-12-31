/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import type {Node} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
 
   TouchableOpacity,
 
   View,
 } from 'react-native';
 


 
 import Icon from 'react-native-vector-icons/MaterialIcons';
 
 
 const itemIcon = ({text,fontSize,iconName,color,backgroundColor,margin,size}) => {

 
   return (
     <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
<View     style={[styles.itemIcon, { width:size,height:size,borderRadius:size,marginHorizontal:margin}]}>

<View style={[styles.itemBody, { backgroundColor,borderRadius:size}]}>

   <Icon name={iconName} color="white" size={size - 30} />
     </View>
     </View>

     <Text style={[styles.textIcon, { fontSize,color}]} >{text}</Text>

     </TouchableOpacity>
   );
 };
 
 const styles =  StyleSheet.create({

  itemIcon: {
     backgroundColor: 'white',
     borderWidth:1,
     borderColor:'#ccc',
     padding:3,
     alignItems:'center',
     justifyContent:'center'
   },
   itemBody: {
   width:'100%',
   height:'100%',
   alignItems:'center',
     justifyContent:'center'
  },
  textIcon: {
    fontWeight:'900',
    marginTop:8
   },

 });
 
 export default itemIcon;
 