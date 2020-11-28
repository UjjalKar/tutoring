import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyDrawer from '../navigationGroup/Drawernavigator';
import Landing from '../pages/Landing';
import Login from '../pages/login';
import ForgetPassword from '../pages/forgetPassword';
import SignUpStack from './signUpStack';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Landing"
          component={Landing}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUpStack"
          component={SignUpStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyDrawer"
          component={MyDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
