import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from 'react-native';
// import {BLUE_CIRCLE, LOGO_IMAGE} from '@Constants/imagepath/Imagepath';
import * as Yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Formik, useFormik} from 'formik';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../../../constants/fonts/Fonts';
import {
  THEME_COLOR,
  INACTIVE_COLOR,
  BLACK_COLOR,
} from '../../../constants/colors/Colors';
import {BLUE_CIRCLE, LOGO_IMAGE} from '../../../constants/imagepath/Imagepath';
import {
  signUpParentData,
  changeSignUpFrom,
  signUpStudentData,
} from '../../../Redux/Actions/signUpAction';
const CommonToast = require('../../../Common/common-toast/index');
import FormTextField from '../../../components/formTextField';

const validateSchema = Yup.object().shape({
  fName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too long!')
    .required('First name required!'),
  lName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too long!')
    .required('Last name required!'),
  email: Yup.string().email('Invalid email').required('Email is required!'),
  phoneNo: Yup.number()
    .min(10, 'Please enter your 10 digit phone no!')
    .required('Phone number is required!'),
  pass: Yup.string()
    .min(8, 'Password should be atleast 8 characters!')
    .required('Password is required!'),
  confirmPass: Yup.string().when('pass', {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('pass')], "Password doesn't match!"),
    checked: Yup.boolean().oneOf([true], 'Accept Trems and condition!'),
  }),
});

const MainSignUp = (props) => {
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.signUpData);
  const [radio_1, onChangeRadio_1] = useState(true);
  const [radio_2, onChangeRadio_2] = useState(false);
  const [role, onChangeRole] = useState('Parent');
  // const [checked, onChangeCheck] = useState(false);
  const formik = useFormik({
    initialValues: {
      fName: '',
      lName: '',
      phoneNo: '',
      pass: '',
      email: '',
      confirmPass: '',
      checked: false,
    },
    validationSchema: validateSchema,
    onSubmit: (val) => {
      _doSubmitForm(val);
    },
  });
  useEffect(() => {
    dispatch(changeSignUpFrom(role));
  }, [role]);

  const changeRadio_1 = () => {
    if (radio_1) {
      onChangeRadio_2(false);
      onChangeRadio_1(true);
      onChangeRole('Parent');
    } else {
      onChangeRadio_2(false);
      onChangeRadio_1(true);
      onChangeRole('Parent');
    }
  };

  const changeRadio_2 = () => {
    if (radio_2) {
      onChangeRadio_2(true);
      onChangeRadio_1(false);
      onChangeRole('Student');
    } else {
      onChangeRadio_2(true);
      onChangeRadio_1(false);
      onChangeRole('Student');
    }
  };

  const _doSubmitForm = (val, actions) => {
    let signUpFromValue = {
      first_name: val.fName,
      last_name: val.lName,
      email: val.email,
      phone_number: val.phoneNo,
      password: val.pass,
      password_confirmation: val.confirmPass,
      role: role,
    };
    if (role === 'Parent') {
      dispatch(signUpParentData(signUpFromValue));
    } else {
      dispatch(signUpStudentData(signUpFromValue));
    }
    props.navigation.navigate('ParentInformation');
  };

  const validateEmail = (email) => {
    var regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regexp.test(email);
  };

  return (
    <SafeAreaView style={styles.safeAreaViewconatiner}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            marginHorizontal: 10,
            marginBottom: wp('8%'),
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
        <KeyboardAvoidingView
          behavior={'height'}
          enabled
          keyboardVerticalOffset={-80}
          style={{
            flex: 1,
            paddingHorizontal: 18,
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{justifyContent: 'center'}}>
            <View style={{marginBottom: 15, alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: Fonts.MulishLight,
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  letterSpacing: 2,
                  fontSize: 16,
                  color: '#999999',
                }}>
                JOIN THE COMMUNITY
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 25,
                marginBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.MulishRegular,
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  letterSpacing: 2,
                  fontSize: 20,
                  color: '#2A2A2A',
                }}>
                Take the first step to getting a tutor that matches your needs
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: 25,
                alignItems: 'center',
                marginBottom: wp('4%'),
              }}>
              <AntDesign name="arrowdown" size={30} color="#1C1C1C" />
            </View>

            <View style={{alignItems: 'center', marginBottom: wp('4%')}}>
              <Text
                style={{
                  fontFamily: Fonts.MulishLight,
                  fontStyle: 'normal',
                  letterSpacing: 2,
                  fontSize: 18,
                  color: '#2F2E2E',
                }}>
                Set up your account
              </Text>
            </View>

            <FormTextField
              labelText="First Name"
              leftIcon={
                <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
              }
              errorText={formik.errors.fName}
              onChangeText={formik.handleChange('fName')}
              value={formik.values.fName}
              handleBlur={formik.handleBlur('fName')}
              touched={formik.touched.fName}
            />

            <FormTextField
              labelText="Last Name"
              leftIcon={
                <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
              }
              errorText={formik.errors.lName}
              onChangeText={formik.handleChange('lName')}
              value={formik.values.lName}
              handleBlur={formik.handleBlur('lName')}
              touched={formik.touched.lName}
            />
            <FormTextField
              labelText="Email Address"
              leftIcon={
                <MaterialCommunityIcons
                  name={'email-edit-outline'}
                  size={wp('5%')}
                  color={'#E2E1E1'}
                />
              }
              errorText={formik.errors.email}
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              handleBlur={formik.handleBlur('email')}
              touched={formik.touched.email}
            />

            <FormTextField
              labelText="Phone Number"
              leftIcon={
                <Feather
                  name={'phone-forwarded'}
                  size={wp('5%')}
                  color={'#E2E1E1'}
                />
              }
              errorText={formik.errors.phoneNo}
              onChangeText={formik.handleChange('phoneNo')}
              value={formik.values.phoneNo}
              handleBlur={formik.handleBlur('phoneNo')}
              touched={formik.touched.phoneNo}
            />

            <FormTextField
              labelText="Password"
              leftIcon={
                <EvilIcons name={'lock'} size={wp('8%')} color={'#E2E1E1'} />
              }
              errorText={formik.errors.pass}
              onChangeText={formik.handleChange('pass')}
              value={formik.values.pass}
              secureTextEntry={true}
              handleBlur={formik.handleBlur('pass')}
              touched={formik.touched.pass}
            />

            <View style={{marginBottom: 2}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="ios-checkmark" size={22} color="#707070" />
                <Text style={{color: '#838383', marginLeft: 10}}>
                  One uppercase charecter
                </Text>
              </View>
            </View>

            <View style={{marginBottom: wp('4%')}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="ios-checkmark" size={22} color="#707070" />
                <Text style={{color: '#838383', marginLeft: 10}}>
                  Minimum of 8 charecter
                </Text>
              </View>
            </View>

            <FormTextField
              labelText="Confirm Password"
              leftIcon={
                <EvilIcons name={'lock'} size={wp('8%')} color={'#E2E1E1'} />
              }
              errorText={formik.errors.confirmPass}
              onChangeText={formik.handleChange('confirmPass')}
              value={formik.values.confirmPass}
              secureTextEntry={true}
              handleBlur={formik.handleBlur('confirmPass')}
            />

            <View style={{marginBottom: wp('4%')}}>
              <Text style={{marginVertical: wp('2%')}}>
                Are you parent or student ?
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    flex: 0.5,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 0.4, alignItems: 'flex-end'}}>
                    {/* <RadioButton color="#499828" value="first" /> */}
                    <CheckBox
                      checked={radio_1}
                      onPress={() => {
                        changeRadio_1();
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="#5CE0EB"
                      size={26}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        padding: 0,
                      }}
                    />
                  </View>
                  <View style={{flex: 0.4, alignItems: 'center'}}>
                    <Text>Parent</Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 0.5,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 0.4, alignItems: 'flex-end'}}>
                    {/* <RadioButton color="#499828" value="second" /> */}
                    <CheckBox
                      checked={radio_2}
                      onPress={() => {
                        changeRadio_2();
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="#5CE0EB"
                      size={26}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        padding: 0,
                      }}
                    />
                  </View>
                  <View style={{flex: 0.4, alignItems: 'center'}}>
                    <Text>Student</Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginBottom: wp('8%'),
              }}>
              <View style={{flex: 0.15, alignItems: 'center'}}>
                <CheckBox
                  checked={formik.values.checked}
                  onPress={() =>
                    formik.setFieldValue('checked', !formik.values.checked)
                  }
                />
              </View>
              <View style={{flex: 0.85}}>
                <Text
                  style={{
                    marginTop: 10,
                    color: '#334159',
                    color: formik.errors.checked == '' ? 'red' : 'black',
                  }}>
                  I agree to the Terms and Conditions and Privacy Policy
                </Text>
              </View>
            </View>

            <TouchableOpacity
              // onPress={doValidation}
              onPress={formik.handleSubmit}
              style={styles.buttonContainer}
              disabled={formik.dirty && !formik.isValid}>
              <Text style={{fontSize: wp('4%'), color: '#fff'}}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              style={{marginVertical: hp('2%')}}>
              <Text
                style={{
                  fontSize: wp('4%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Already signup? Please Login
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
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
  label: {
    marginBottom: wp('2%'),
    color: BLACK_COLOR,
  },
  buttonContainer: {
    width: wp('88%'),
    height: hp('6%'),
    backgroundColor: THEME_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  errorLabel: {
    color: 'red',
    marginTop: wp('2%'),
  },
});

export default MainSignUp;
