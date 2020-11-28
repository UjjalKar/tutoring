import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImagePropTypes,
} from 'react-native';
import {BLUE_CIRCLE, LOGO_IMAGE} from '../../constants/imagepath/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../../constants/fonts/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {THEME_COLOR} from '../../constants/colors/Colors';

const ForgetPassword = (props) => {
  const [userName, onChangeUsername] = useState('');
  const [pass, onChangePass] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaViewconatiner}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            marginHorizontal: 10,
          }}>
          <Image
            source={LOGO_IMAGE}
            resizeMode="contain"
            style={{
              width: wp('35%'),
              height: wp('10%'),
            }}
          />

          <MaterialCommunityIcons
            name="menu"
            size={24}
            color="#2A2A2A"
            style={{fontSize: wp('10%')}}
          />
        </View>
        {Platform.OS == 'ios' && (
          <KeyboardAvoidingView
            behavior={'padding'}
            enabled
            keyboardVerticalOffset={100}
            style={{
              flex: 1,
              paddingHorizontal: 22,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="always"
              contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: userName == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {marginBottom: hp('5%'), flexDirection: 'row'},
                ]}>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 20}}
                  placeholder={'Email'}
                  value={userName}
                  onChangeText={(text) => {
                    onChangeUsername(text);
                  }}
                />
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Entypo name={'user'} size={wp('5%')} color={'#E2E1E1'} />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('ForgetPassword')}
                style={styles.buttonContainer}>
                <Text style={{fontSize: wp('4%'), color: '#fff'}}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={{fontSize: wp('4%'), alignSelf: 'center'}}>
                  Back to Sign In{' '}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        )}
        {Platform.OS == 'android' && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{
              justifyContent: 'center',
              flexGrow: 1,
              paddingHorizontal: 22,
            }}>
            <View
              style={[
                {
                  height: hp('6%'),
                  borderColor: userName == '' ? '#EEEEEE, 100%' : '#5EE1E8',
                  borderWidth: 1,
                },
                {marginBottom: hp('3%'), flexDirection: 'row'},
              ]}>
              <TextInput
                style={{flex: 0.9, paddingLeft: 20}}
                placeholderTextColor="#7A7A7A"
                placeholder={'Username'}
                value={userName}
                onChangeText={(text) => {
                  onChangeUsername(text);
                }}
              />
              <View
                style={{
                  flex: 0.1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name={'user'} size={wp('5%')} color={'#E2E1E1'} />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgetPassword')}
              style={styles.buttonContainer}>
              <Text style={{fontSize: wp('5%'), color: '#fff'}}>Submit</Text>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={{fontSize: wp('4%'), alignSelf: 'center'}}>
                  Back to Sign In{' '}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewconatiner: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    width: wp('88%'),
    height: hp('6%'),
    backgroundColor: THEME_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
});
export default ForgetPassword;
