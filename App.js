/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/home'

import Hamburger from './src/components/hamburger/hamburger';
import Notif from './src/components/notifHeader/notifHeader';

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
} from 'react-native/Libraries/NewAppScreen'
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <Tab.Navigator  
      screenOptions={({navigation}) => ({
        headerStyle: {
         backgroundColor: 'white',
        },
        headerTitleStyle: {fontSize: 18,fontWeight:'900'},
    
        headerTitleAlign: 'center',
    
        headerLeft: (props) => (
         <Hamburger
       /*    onPress={() => {
           navigation.openDrawer();
          }} */
         />
        ),
    
        headerRight: (props) => (
         <Notif
        /*   onPress={() => {
           navigation.navigate('Notifications');
          }} */
         />
        ),
       })}
       initialRouteName="ACCUEIL"
    >
      <Tab.Screen name="ACCUEIL" component={HomeScreen}   options={({navigation}) => ({
     headerTitle: 'ACCUEIL',
 
    })} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
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

export default App;
