import React, {useState, useMemo} from 'react';
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
  const [radio_1, onChangeRadio_1] = useState(false);
  const [radio_2, onChangeRadio_2] = useState(true);
  const [role, onChangeRole] = useState('Parent');
  // const [checked, onChangeCheck] = useState(false);
  console.log('state role', role);
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

  const doValidation = (values) => {
    // console.log('doValidation', values.fName);

    let errors = {};
    const {fName, lName, email, phoneNo, confirmPass, pass, checked} = values;

    if (fName.trim() == '') {
      // CommonToast.showToast('First name is required', 'success');
      // console.log('First name is required', 'success');
      errors.fName = 'First name is required';
    }
    if (lName.trim() == '') {
      // console.log('Last name is required', 'success');
      errors.lName = 'Last name is required';
    }
    if (email == '') {
      // console.log('Email is required', 'success');
      errors.email = 'Email is required';
    }
    if (!validateEmail(email)) {
      // console.log('Please enter valid email', 'success');
      errors.email = 'Please enter valid email';
    }
    // if (email == '') {
    //   console.log('Please enter valid email', 'success');

    // }
    if (phoneNo == '') {
      // console.log('phone no. is required', 'success');
      errors.phoneNo = 'phone no is required';
    }
    if (pass == '') {
      // console.log('Password is required', 'success');
      errors.pass = 'Password is required';
    }
    if (pass.length < 6) {
      // console.log('Minimum of 8 characters', 'error');
      errors.pass = 'Minimum of 8 characters';
    }
    if (confirmPass == '') {
      // console.log('Confirm Password is required', 'error');
      errors.confirmPass = 'Confirm Password is required';
    }
    if (confirmPass != pass) {
      // console.log('Password do not match', 'error');
      errors.confirmPass = 'Password do not match';
    }
    if (role == '') {
      // console.log('Select a role', 'error');
      errors.role = 'Select a role';
    }
    if (!checked) {
      // console.log('Agree and Continue', 'error');
      errors.checked = 'Agree and Continue';
    }

    return errors;
    // let signUpFromValue = {
    //   first_name: fName,
    //   last_name: lName,
    //   email: email,
    //   phone_number: phoneNo,
    //   password: pass,
    //   password_confirmation: confirmPass,
    //   role: role,
    // };
    // dispatch(signUpUser(signUpFromValue));
    // props.navigation.navigate('ParentInformation');
  };

  const _doSubmitForm = (val) => {
    let signUpFromValue = {
      first_name: val.fName,
      last_name: val.lName,
      email: val.email,
      phone_number: val.phoneNo,
      password: val.pass,
      password_confirmation: val.confirmPass,
      role: role,
    };
    dispatch(signUpUser(signUpFromValue));
    props.navigation.navigate('ParentInformation');
  };

  const validateEmail = (email) => {
    var regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regexp.test(email);
  };

  const formikInitialValues = useMemo(
    () => ({
      fName: '',
      lName: '',
      phoneNo: '',
      pass: '',
      email: '',
      confirmPass: '',
      checked: false,
    }),
    [],
  );

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
              initialValues={formikInitialValues}
              onSubmit={_doSubmitForm}
              validate={doValidation}
              enableReinitialize>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                setFieldValue,
                errors,
                setFieldTouched,
                isValid,
                dirty,
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
                        onBlur={handleBlur('lName')}
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
                          console.log('isValid', isValid);
                          setFieldValue('email', text);
                        }}
                        onBlur={handleBlur('email')}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: wp('6%')}}>
                    <Text style={styles.label}>Phone Number</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          // borderColor: values.phoneNo == '' ? '#EEEEEE' : '#5EE1E8',
                          borderColor: errors.phoneNo ? 'red' : '#5EE1E8',
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
                        onBlur={handleBlur('phoneNo')}
                      />
                    </View>
                  </View>

                  <View style={{marginBottom: wp('3%')}}>
                    <Text style={styles.label}>Password</Text>
                    <View
                      style={[
                        {
                          height: hp('6%'),
                          borderColor: errors.pass ? 'red' : '#5EE1E8',
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
                        onBlur={handleBlur('pass')}
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
                          borderColor: errors.confirmPass ? 'red' : '#5EE1E8',
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
                        onBlur={handleBlur('confirmPass')}
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
                            onBlur={handleBlur('radio_1')}
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
                        onBlur={handleBlur('checked')}
                      />
                    </View>
                    <View style={{flex: 0.85}}>
                      <Text style={{marginTop: 10, color: '#334159'}}>
                        I agree to the Terms and Conditions and Privacy Policy
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    // onPress={doValidation}
                    onPress={handleSubmit}
                    style={styles.buttonContainer}
                    disabled={dirty && !isValid}>
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
