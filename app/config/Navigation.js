import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Options from '../screens/Options';
import Home from '../screens/Home';
import ImageDetails from '../screens/ImageDetails';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />  
    <MainStack.Screen name="Options" component={Options} options={{ headerShown: false }}/>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="ImageDetails" component={ImageDetails} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);