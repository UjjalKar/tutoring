import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../DrawerComponent/index';
import AboutUs from '../pages/AboutUs/index';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerComponent
          {...props}
          initialRouteName="QrCode"
          drawerPosition="right"
        />
      )}>
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
