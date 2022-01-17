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
import Icon from 'react-native-vector-icons/MaterialIcons';

import Hamburger from './src/components/hamburger/hamburger';
import Notif from './src/components/notifHeader/notifHeader';

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

function PersonScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Person</Text>
    </View>
  );
}
function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <Tab.Navigator  
      screenOptions={({route}) => ({
        headerStyle: {
         backgroundColor: 'white',
        },
        tabBarStyle: { backgroundColor: '#157f53',height:75 },
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

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ACCUEIL') {
            iconName = focused
              ? 'home'
              : 'home';
          }  else if (route.name === 'Settings') {
            iconName = focused ? 'bento' : 'bento';
          }else if (route.name === 'Person') {
            iconName = focused ? 'person' : 'person';
          }else if (route.name === 'Time') {
            iconName = focused ? 'person' : 'person';
          }
          else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
          }

          // You can return any component that you like here!
          return focused ? <View style={{width:70,height:65,alignItems:'center',justifyContent:'center', borderRadius:70,backgroundColor:'white',marginTop:-50}}><View style={{width:60,height:60,alignItems:'center',justifyContent:'center',borderRadius:60,backgroundColor:'#157f53',marginTop:-4}}><Icon name={iconName} size={size} color={color} /></View></View> : <Icon name={iconName} size={size} color={color} /> ;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#ccc',
        tabBarShowLabel:false,
     


       })}






   



       initialRouteName="ACCUEIL"
    >
      <Tab.Screen name="ACCUEIL" component={HomeScreen}   options={({navigation}) => ({
     headerTitle: 'ACCUEIL',
 
    })} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Person" component={PersonScreen} />
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
