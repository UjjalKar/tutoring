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
// import {BLUE_CIRCLE, LOGO_IMAGE} from '@Constants/imagepath/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
// import {object, string, ref, boolean} from 'yup';
// import * as Yup from 'yup';
const Yup = require('yup').default;

import {Fonts} from '../../../constants/fonts/Fonts';
import {
  THEME_COLOR,
  INACTIVE_COLOR,
  BLACK_COLOR,
} from '../../../constants/colors/Colors';
import {BLUE_CIRCLE, LOGO_IMAGE} from '../../../constants/imagepath/Imagepath';
import {signUpUser} from '../../../Redux/Actions/signUpAction';
const CommonToast = require('../../../Common/common-toast/index');

const MainSignUp = (props) => {
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.signUpData);
  console.log(JSON.stringify(signUpData));

  // const [fName, onChangefName] = useState('');
  // const [lName, onChangelName] = useState('');
  // const [email, onChangeEmail] = useState('');
  // const [phoneNo, onChangePhoneNo] = useState('');
  // const [pass, onChangePass] = useState('');
  // const [confirmPass, onChangeConfirmPass] = useState('');
  // const [radio_1, onChangeRadio_1] = useState(false);
  // const [radio_2, onChangeRadio_2] = useState(true);
  // const [role, onChangeRole] = useState('Parent');
  // const [checked, onChangeCheck] = useState(false);

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

  const doValidation = () => {
    if (fName.trim() == '') {
      CommonToast.showToast('First name is required', 'success');
      return;
    }
    if (lName.trim() == '') {
      CommonToast.showToast('Last name is required', 'success');
      return;
    }
    if (email == '') {
      CommonToast.showToast('Email is required', 'success');
      return;
    }
    if (!validateEmail()) {
      CommonToast.showToast('Please enter valid email', 'success');
      return;
    }
    if (email == '') {
      CommonToast.showToast('Please enter valid email', 'success');
      return;
    }
    if (phoneNo == '') {
      CommonToast.showToast('phone no. is required', 'success');
      return;
    }
    if (pass == '') {
      CommonToast.showToast('Password is required', 'success');
      return;
    }
    if (pass.length < 6) {
      CommonToast.showToast('Minimum of 8 characters', 'error');
      return;
    }
    if (confirmPass == '') {
      CommonToast.showToast('Confirm Password is required', 'error');
      return;
    }
    if (confirmPass != pass) {
      CommonToast.showToast('Password do not match', 'error');
      return;
    }
    if (role == '') {
      CommonToast.showToast('Select a role', 'error');
      return;
    }
    if (!checked) {
      CommonToast.showToast('Agree and Continue', 'error');
      return;
    }
    let signUpFromValue = {
      first_name: fName,
      last_name: lName,
      email: email,
      phone_number: phoneNo,
      password: pass,
      password_confirmation: confirmPass,
      role: role,
    };
    dispatch(signUpUser(signUpFromValue));
    props.navigation.navigate('ParentInformation');
  };

  const validateEmail = () => {
    var regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regexp.test(email);
  };

  const ValidateSchema = Yup.object().shape({
    fName: Yup.string().min(3, 'Too short!').required('first name required!'),
    lName: Yup.string().min(3, 'Too short!').required('first name required!'),
    email: Yup.string().email().required('Email is required!'),
    phoneNo: Yup.string()
      .required('Phone number is required')
      .matches(
        /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
        'Invalid phone number',
      ),
    pass: Yup.string().required('Password is required!'),
    confirmPass: Yup.string().oneOf([Yup.ref('pass'), null]),
    checked: Yup.boolean().required('agreed !'),
  });

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
          behavior={'position'}
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
            {/* 
              
                const [fName, onChangefName] = useState('');
  const [lName, onChangelName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phoneNo, onChangePhoneNo] = useState('');
  const [pass, onChangePass] = useState('');
  const [confirmPass, onChangeConfirmPass] = useState('');
  const [radio_1, onChangeRadio_1] = useState(false);
  const [radio_2, onChangeRadio_2] = useState(true);
  const [role, onChangeRole] = useState('Parent');
  const [checked, onChangeCheck] = useState(false);
              */}
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
            <Formik
              initialValues={{
                fName: '',
                lName: '',
                phoneNo: '',
                pass: '',
                email: '',
                confirmPass: '',
                radio_1: false,
                radio_2: true,
                role: '',
                checked: false,
              }}
              onSubmit={(val) => console.log(val)}
              validationSchema={ValidateSchema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                setFieldValue,
                errors,
              }) => (
                <>
                  <View style={{marginBottom: wp('6%')}}>
                    <Text style={styles.label}>First Name</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          // borderColor: fName == '' ? '#EEEEEE' : '#5EE1E8',
                          borderColor: errors.fName ? 'red' : '#5EE1E8',
                          borderWidth: 1,
                        },
                        {flexDirection: 'row'},
                      ]}>
                      <View
                        style={{
                          flex: 0.1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <AntDesign
                          name={'user'}
                          size={wp('5%')}
                          color={'#E2E1E1'}
                        />
                      </View>
                      <TextInput
                        style={{flex: 0.9, paddingLeft: 5}}
                        value={values.fName}
                        onChangeText={(text) => {
                          setFieldValue('fName', text);
                        }}
                        onBlur={handleBlur('fName')}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: wp('6%')}}>
                    <Text style={styles.label}>Last Name</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          // borderColor: lName == '' ? '#EEEEEE' : '#5EE1E8',
                          borderColor: errors.lName ? 'red' : '#5EE1E8',
                          borderWidth: 1,
                        },
                        {flexDirection: 'row'},
                      ]}>
                      <View
                        style={{
                          flex: 0.1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <AntDesign
                          name={'user'}
                          size={wp('5%')}
                          color={'#E2E1E1'}
                        />
                      </View>
                      <TextInput
                        style={{flex: 0.9, paddingLeft: 5}}
                        value={values.lName}
                        onChangeText={(text) => {
                          setFieldValue('lName', text);
                        }}
                        onBlur={handleBlur}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: wp('6%')}}>
                    <Text style={styles.label}>Email Address</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          // borderColor: email == '' ? '#EEEEEE' : '#5EE1E8',
                          borderColor: errors.email ? 'red' : '#5EE1E8',
                          borderWidth: 1,
                        },
                        {flexDirection: 'row'},
                      ]}>
                      <View
                        style={{
                          flex: 0.1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MaterialCommunityIcons
                          name={'email-edit-outline'}
                          size={wp('5%')}
                          color={'#E2E1E1'}
                        />
                      </View>
                      <TextInput
                        style={{flex: 0.9, paddingLeft: 5}}
                        value={values.email}
                        onChangeText={(text) => {
                          setFieldValue('email', text);
                        }}
                        onBlur={handleBlur}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: wp('6%')}}>
                    <Text style={styles.label}>Phone Number</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          borderColor: phoneNo == '' ? '#EEEEEE' : '#5EE1E8',
                          borderWidth: 1,
                        },
                        {flexDirection: 'row'},
                      ]}>
                      <View
                        style={{
                          flex: 0.1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Feather
                          name={'phone-forwarded'}
                          size={wp('5%')}
                          color={'#E2E1E1'}
                        />
                      </View>
                      <TextInput
                        style={{flex: 0.9, paddingLeft: 5}}
                        value={values.phoneNo}
                        onChangeText={(text) => {
                          setFieldValue('phoneNo', text);
                        }}
                        onBlur={handleBlur}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: wp('3%')}}>
                    <Text style={styles.label}>Password</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          borderColor: pass == '' ? '#EEEEEE' : '#5EE1E8',
                          borderWidth: 1,
                        },
                        {flexDirection: 'row'},
                      ]}>
                      <View
                        style={{
                          flex: 0.1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <EvilIcons
                          name={'lock'}
                          size={wp('8%')}
                          color={'#E2E1E1'}
                        />
                      </View>
                      <TextInput
                        style={{flex: 0.9, paddingLeft: 5}}
                        value={values.pass}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                          setFieldValue('pass', text);
                        }}
                        onBlur={handleBlur}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: 2}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons
                        name="ios-checkmark"
                        size={22}
                        color="#707070"
                      />
                      <Text style={{color: '#838383', marginLeft: 10}}>
                        One uppercase charecter
                      </Text>
                    </View>
                  </View>

                  <View style={{marginBottom: wp('4%')}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons
                        name="ios-checkmark"
                        size={22}
                        color="#707070"
                      />
                      <Text style={{color: '#838383', marginLeft: 10}}>
                        Minimum of 8 charecter
                      </Text>
                    </View>
                  </View>

                  <View style={{marginBottom: wp('3%')}}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          borderColor:
                            confirmPass == '' ? '#EEEEEE' : '#5EE1E8',
                          borderWidth: 1,
                        },
                        {flexDirection: 'row'},
                      ]}>
                      <View
                        style={{
                          flex: 0.1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <EvilIcons
                          name={'lock'}
                          size={wp('8%')}
                          color={'#E2E1E1'}
                        />
                      </View>
                      <TextInput
                        style={{flex: 0.9, paddingLeft: 5}}
                        value={values.confirmPass}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                          // onChangeConfirmPass(text);
                          setFieldValue('confirmPass', text);
                        }}
                      />
                    </View>
                  </View>

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
                            onBlur={handleBlur}
                            checked={values.radio_1}
                            onPress={() => {
                              if (values.radio_1) {
                                setFieldValue('radio_2', false);
                                setFieldValue('radio_1', true);
                                setFieldValue('role', 'Parent');
                                // onChangeRole('Parent');
                              } else {
                                setFieldValue('radio_1', false);
                                setFieldValue('radio_2', true);
                                setFieldValue('role', 'Parent');
                              }
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
                            checked={values.radio_2}
                            onPress={() =>
                              setFieldValue('radio_2', !values.radio_2)
                            }
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="#5CE0EB"
                            size={26}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderWidth: 0,
                              padding: 0,
                            }}
                            onBlur={handleBlur}
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
                        checked={values.checked}
                        onPress={() =>
                          setFieldValue('checked', !values.checked)
                        }
                        onBlur={handleBlur}
                      />
                    </View>
                    <View style={{flex: 0.85}}>
                      <Text style={{marginTop: 10, color: '#334159'}}>
                        I agree to the Terms and Conditions and Privacy Policy
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    //  onPress={() => props.navigation.navigate('ParentInformation')}
                    // onPress={doValidation}
                    onPress={handleSubmit}
                    style={styles.buttonContainer}>
                    <Text style={{fontSize: wp('4%'), color: '#fff'}}>
                      Continue
                    </Text>
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
                </>
              )}
            </Formik>

            {/* <View style={{marginBottom: wp('6%')}}>
              <Text style={styles.label}>First Name</Text>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: fName == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {flexDirection: 'row'},
                ]}>
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
                </View>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 5}}
                  value={fName}
                  onChangeText={(text) => {
                    onChangefName(text);
                  }}
                />
              </View>
            </View> */}

            {/* <View style={{marginBottom: wp('6%')}}>
              <Text style={styles.label}>Last Name</Text>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: lName == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {flexDirection: 'row'},
                ]}>
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
                </View>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 5}}
                  value={lName}
                  onChangeText={(text) => {
                    onChangelName(text);
                  }}
                />
              </View>
            </View> */}

            {/* <View style={{marginBottom: wp('6%')}}>
              <Text style={styles.label}>Email Address</Text>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: email == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {flexDirection: 'row'},
                ]}>
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name={'email-edit-outline'}
                    size={wp('5%')}
                    color={'#E2E1E1'}
                  />
                </View>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 5}}
                  value={email}
                  onChangeText={(text) => {
                    onChangeEmail(text);
                  }}
                />
              </View>
            </View> */}

            {/* <View style={{marginBottom: wp('6%')}}>
              <Text style={styles.label}>Phone Number</Text>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: phoneNo == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {flexDirection: 'row'},
                ]}>
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Feather
                    name={'phone-forwarded'}
                    size={wp('5%')}
                    color={'#E2E1E1'}
                  />
                </View>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 5}}
                  value={phoneNo}
                  onChangeText={(text) => {
                    onChangePhoneNo(text);
                  }}
                />
              </View>
            </View> */}

            {/* <View style={{marginBottom: wp('3%')}}>
              <Text style={styles.label}>Password</Text>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: pass == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {flexDirection: 'row'},
                ]}>
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <EvilIcons name={'lock'} size={wp('8%')} color={'#E2E1E1'} />
                </View>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 5}}
                  value={pass}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    onChangePass(text);
                  }}
                />
              </View>
            </View> */}

            {/* <View style={{marginBottom: 2}}>
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
            </View> */}

            {/* <View style={{marginBottom: wp('3%')}}>
              <Text style={styles.label}>Confirm Password</Text>
              <View
                style={[
                  {
                    height: hp('6%'),
                    borderColor: confirmPass == '' ? '#EEEEEE' : '#5EE1E8',
                    borderWidth: 1,
                  },
                  {flexDirection: 'row'},
                ]}>
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <EvilIcons name={'lock'} size={wp('8%')} color={'#E2E1E1'} />
                </View>
                <TextInput
                  style={{flex: 0.9, paddingLeft: 5}}
                  value={confirmPass}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    onChangeConfirmPass(text);
                  }}
                />
              </View>
            </View> */}

            {/* <View style={{marginBottom: wp('4%')}}>
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
                    // <RadioButton color="#499828" value="first" />
                    <CheckBox
                      checked={radio_1}
                      onPress={changeRadio_1}
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
                    // <RadioButton color="#499828" value="second" /> 
                    <CheckBox
                      checked={radio_2}
                      onPress={changeRadio_2}
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
            </View> */}

            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginBottom: wp('8%'),
              }}>
              <View style={{flex: 0.15, alignItems: 'center'}}>
                <CheckBox
                  checked={checked}
                  onPress={() => onChangeCheck(!checked)}
                />
              </View>
              <View style={{flex: 0.85}}>
                <Text style={{marginTop: 10, color: '#334159'}}>
                  I agree to the Terms and Conditions and Privacy Policy
                </Text>
              </View>
            </View> */}

            {/* <TouchableOpacity
              //  onPress={() => props.navigation.navigate('ParentInformation')}
              // onPress={doValidation}
              onPress={handleSubmit}
              style={styles.buttonContainer}>
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
            </TouchableOpacity> */}
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
});
export default MainSignUp;
