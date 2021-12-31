/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import CreditCard from '../components/creditCard/creditCard';
import ItemIcon from '../components/ItemIcon/itemIcon';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
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
 
 
 const Home : () => Node = () => {

 
   return (
<View style={{ flex: 1, alignItems:'center', padding:10,backgroundColor:'white' }}>
      
       <CreditCard name="Mr Joe Doe" solde="0.00000"/> 

<Text style={{marginVertical:35, fontSize:14,fontWeight:'800'}}> Acheter une carte </Text>
<View style={{flexDirection:'row'}}>
<ItemIcon text="TRANSFERT" size={70} margin={15} iconName="payments" backgroundColor={'#157f53'}  color={'#157f53'} fontSize={10} />
<ItemIcon text="PAIEMENT" size={70} margin={15} iconName="payment" backgroundColor={'#157f53'} color={'#157f53'} fontSize={10} />
<ItemIcon text="EPARGNE" size={70} margin={15} iconName="shopping-basket" backgroundColor={'#157f53'} color={'#157f53'} fontSize={10} />

</View>






<Text style={{marginTop:50,marginBottom:20,  fontSize:14,fontWeight:'800'}}> Services </Text>
<View style={{flexDirection:'row'}}>
<ItemIcon text="Ticket" size={60} margin={5} iconName="confirmation-number" backgroundColor={'#157f53'}  color={'#157f53'} fontSize={9} />
<ItemIcon text="Tv" size={60} margin={5} iconName="tv" backgroundColor={'#157f53'} color={'#157f53'} fontSize={9} />
<ItemIcon text="Eau" size={60} margin={5} iconName="opacity" backgroundColor={'#157f53'} color={'#157f53'} fontSize={9} />
<ItemIcon text="Electricité" size={60} margin={5} iconName="bolt" backgroundColor={'#157f53'} color={'#157f53'} fontSize={9} />

</View>


     </View>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Home;
 