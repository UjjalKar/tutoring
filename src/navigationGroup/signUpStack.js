import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainSignUp from '../pages/registration/mainSignUp/index';
import WhoYouAre from '../pages/registration/whoyouare';
import Login from '../../src/pages/login';
import ParentOrStudent from '../pages/registration/parentorstudent';
import ParentInformation from '../pages/registration/parentinformation';
import AccountConfirmation from '../pages/registration/parentinformation/accountConfirmation';
import MyDrawer from '../navigationGroup/Drawernavigator';

const Stack = createStackNavigator();

export default function SignUpStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MainSignUp"
          component={MainSignUp}
          initialRouteName="MainSignUp"
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyDrawer"
          component={MyDrawer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WhoYouAre"
          component={WhoYouAre}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ParentOrStudent"
          component={ParentOrStudent}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ParentInformation"
          component={ParentInformation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AccountConfirmation"
          component={AccountConfirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
