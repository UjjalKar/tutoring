import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {THEME_COLOR} from '../constants/colors/Colors';
import AsyncStorage from '@react-native-community/async-storage';

class DrawerComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 0, backgroundColor: THEME_COLOR}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AboutUs')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginBottom: 20,
          }}>
          <Text>hello</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginBottom: 20,
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DrawerComponent;
