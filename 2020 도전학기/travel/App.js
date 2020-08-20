/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import './shim';
import './globals';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/HomeScreen';
import SplashScreen from './src/SplashScreen';
import MyPageScreen from './src/MypageScreen';
import TravelScreen from './src/TravelScreen';
import DeliveryScreen from './src/DeliveryScreen';
import PensionScreen from './src/PensionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#5cc27b',
        }}
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
              return <Ionicons name={iconName} size={25} color={color} />;
            } else if (route.name === 'Travel') {
              iconName = focused ? 'ios-bed' : 'ios-bed-outline';
              return <Ionicons name={iconName} size={25} color={color} />
            } else if (route.name === 'Delivery') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
              return <Ionicons name={iconName} size={25} color={color} />
            } else if (route.name === 'MyPage') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
              return <Ionicons name={iconName} size={25} color={color} />
            }
          },
        })}
      >
        <Tab.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
          }}
        />
        <Tab.Screen 
          name="Travel"
          component={TravelScreen}
          options={{
            tabBarLabel: '여행',
          }}
        />
        <Tab.Screen 
          name="Delivery"
          component={DeliveryScreen}
          options={{
            tabBarLabel: '배달',
          }}
        />
        <Tab.Screen 
          name="MyPage"
          component={MyPageScreen}
          options={{
            tabBarLabel: '내정보',
          }}
        />
      </Tab.Navigator>
  )
} 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="PensionScreen"
          component={PensionScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
