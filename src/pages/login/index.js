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
import {LOGO_IMAGE} from '../../constants/imagepath/Imagepath';
import AsyncStorage from '@react-native-community/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../../constants/fonts/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {THEME_COLOR} from '../../constants/colors/Colors';
const CommonToast = require('../../Common/common-toast/index');
import Loader from '../../Common/Loader';
import Apis from '../../Network/apicall';

const Login = (props) => {
  const [userName, onChangeUsername] = useState('');
  const [pass, onChangePass] = useState('');
  const [loading, setLoading] = useState(false);

  const Login = async () => {
    setLoading(true);
    const data = {
      email: userName,
      password: pass,
    };
    await Apis.login(data)
      .then(async (res) => {
        console.log('login-------->', res);
        if (res.status === 200) {
          setLoading(false);
          await AsyncStorage.setItem('userData', JSON.stringify(res.data));
          props.navigation.navigate('MyDrawer');
        } else {
          setLoading(false);
          CommonToast.showToast(res.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  doValidation = () => {
    if (userName == '') {
      CommonToast.showToast('Email is required');
      return;
    }
    if (pass.trim() == '') {
      CommonToast.showToast('Password is required');
      return;
    }
    if (pass.length < 6) {
      CommonToast.showToast('Please enter atleast 6 chracters', 'error');
      return;
    }
    Login();
  };

  return (
    <SafeAreaView style={styles.safeAreaViewconatiner}>
      <View style={styles.container}>
        <Loader loading={loading} />
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
                  {marginBottom: hp('3%'), flexDirection: 'row'},
                ]}>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 20}}
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
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: pass == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {marginBottom: hp('3%'), flexDirection: 'row'},
                ]}>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 20}}
                  placeholder={'Password'}
                  value={pass}
                  onChangeText={(text) => {
                    onChangePass(text);
                  }}
                  secureTextEntry={true}
                />
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SimpleLineIcons
                    name={'lock'}
                    size={wp('5%')}
                    color={'#E2E1E1'}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={{alignItems: 'center', marginBottom: 20}}
                onPress={() => props.navigation.navigate('ForgetPassword')}>
                <Text style={{color: '#000000', fontSize: 16}}>
                  Forgot Password{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => props.navigation.navigate('MyDrawer')}
                onPress={doValidation}
                style={styles.buttonContainer}>
                <Text style={{fontSize: wp('4%'), color: '#fff'}}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUpStack')}
                style={{marginVertical: hp('2%')}}>
                <Text style={{fontSize: wp('4%'), alignSelf: 'center'}}>
                  Don't have an account?{' '}
                  <Text
                    style={{fontSize: wp('4%'), fontWeight: '500'}}
                    onPress={() => props.navigation.navigate('SignUpStack')}>
                    Please register
                  </Text>
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
                  borderColor: userName == '' ? '#7A7A7A' : '#5EE1E8',
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
            <View
              style={[
                {
                  height: hp('6%'),
                  borderColor: pass == '' ? '#EEEEEE' : '#5EE1E8',
                  borderWidth: 1,
                },
                {marginBottom: hp('3%'), flexDirection: 'row'},
              ]}>
              <TextInput
                style={{flex: 0.9, paddingLeft: 20}}
                placeholder={'Password'}
                value={pass}
                onChangeText={(text) => {
                  onChangePass(text);
                }}
                secureTextEntry={true}
              />
              <View
                style={{
                  flex: 0.1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SimpleLineIcons
                  name={'lock'}
                  size={wp('5%')}
                  color={'#E2E1E1'}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{alignItems: 'center', marginBottom: 20}}
              onPress={() => props.navigation.navigate('ForgetPassword')}>
              <Text style={{color: '#000000', fontSize: 16}}>
                Forgot Password{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('MyDrawer')}
              style={styles.buttonContainer}>
              <Text style={{fontSize: wp('5%'), color: '#fff'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('MainSignUp')}
              style={{marginVertical: hp('2%')}}>
              <Text style={{fontSize: wp('5%'), alignSelf: 'center'}}>
                Don't have an account? Please register
              </Text>
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
    backgroundColor: THEME_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: wp('70%'),
    height: hp('8%'),
    alignSelf: 'center',
  },
  buttonContainer: {
    width: wp('88%'),
    height: hp('6%'),
    backgroundColor: THEME_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
export default Login;
