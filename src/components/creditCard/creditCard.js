/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   Image,
   ImageBackground,
   View,
 } from 'react-native';
 

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import Icon from 'react-native-vector-icons/MaterialIcons';
 
 const CreditCard = ({name,solde}) => {

 
   return (
<View style={styles.card}>
<ImageBackground source={require('./images/world-map.png')} resizeMode="cover" style={styles.image}>
  <Text style={[styles.textcard,{marginTop:20}]} >{name}</Text>

  <View style={styles.rowBtw}>
  <View>
  <Text style={styles.solde}>Solde</Text>
  <Text style={styles.textcard} >{solde} Fcfa</Text>
  </View>


<Image source={require('./images/visa.png')} style={{height:30,width:50}} resizeMode='contain' />
  </View>
  </ImageBackground>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   card: {
     backgroundColor: '#157f53',
     marginTop:20,
     borderRadius:16,
     height:170,
     width:'100%',
     padding:15,
     justifyContent:'space-between'
   },
   rowBtw: {
flexDirection:'row',
justifyContent:'space-between'
   },
   textcard: {
     fontSize: 16,
     fontWeight: '900',
     color:'white'
   },
   solde: {
    fontSize: 12,
    fontWeight: '900',
    color:'white'
  },
  image: {
    flex: 1,
    justifyContent:'space-between',
  },
 });
 
 export default CreditCard;
 