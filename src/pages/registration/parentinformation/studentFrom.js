import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-picker';

import {SIGNUP_STUDENTS} from '../../../Redux/type';
import Dropdown from '../../../components/dropdown';
import DropdownDateofBirth from '../../../components/dropDownDateofBirth';
import TextBox from '../../../components/textBox';
import CalendarView from '../../../components/calendar';
import {PlainButton} from '../../../components/plainButton';

import {
  THEME_COLOR,
  SILVER_COLOR,
  INACTIVE_COLOR,
  WHITE_COLOR,
  BLACK_COLOR,
} from '../../../constants/colors/Colors';
import {UPLOAD_IMAGE} from '../../../constants/imagepath/Imagepath';
import FormTextField from '../../../components/formTextField';
const stateDataJson = require('../../../json/states.json');

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  addParentSignupStudent,
  signUpParant,
  signUpStudent,
  signUpStudentData,
} from '../../../Redux/Actions/signUpAction';

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
  zipcode: Yup.string().required('Zip Code is required!'),
  currentschool: Yup.string().required('Current school required!'),
  gender: Yup.string().required('Gender required!'),
  disabilities: Yup.string().required('Disabilities required!'),
  dob: Yup.string().required('DOB required!'),
  race: Yup.string().required('Race required!'),
  major: Yup.string().required('Major required!'),
  address: Yup.string().required('Address required!'),
  state: Yup.string().required('State required!'),
  pass: Yup.string()
    .min(8, 'Password should be atleast 8 characters!')
    .required('Password is required!'),
  confirmPass: Yup.string().when('pass', {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('pass')], "Password doesn't match!"),
    checked: Yup.boolean().oneOf([true], 'Accept Trems and condition!'),
  }),

  parentName: Yup.string().min(2, 'Too Short!').max(50, 'Too long!'),
  parentEmail: Yup.string().email('Invalid email'),
  currentGrade: Yup.string().required('Grade is required!'),
  currentGpa: Yup.string().required('GPA required!'),
  specialNeed: Yup.string(),
});

const StudentForm = (props) => {
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.signUpData);
  const [addMoreStudent, setAddMoreStudent] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [calendarStatus, setCalendarStatus] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const [source, setImageUrl] = useState(null);

  useEffect(() => {
    if (signUpData.signupSuccess) {
      props.onClick();
    }
  }, [signUpData.signupSuccess]);

  useEffect(() => {
    if (signUpData.errors) {
      ToastAndroid.show(
        Object.values(signUpData.errors)[0][0],
        ToastAndroid.LONG,
      );
    }
  }, [signUpData.errors]);
  const GenderList = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
    {
      label: 'Others',
      value: 'Others',
    },
    {
      label: 'I donot prefer to say',
      value: 'I donot prefer to say',
    },
  ];

  const raceList = [
    {
      label: 'American indian or Alaska Native',
      value: 'American indian or Alaska Native',
    },
    {
      label: 'Asin',
      value: 'Asin',
    },
    {
      label: 'Black or African American',
      value: 'Black or African American',
    },
    {
      label: 'White',
      value: 'White',
    },
    {
      label: 'I donot prefer to say',
      value: 'I donot prefer to say',
    },
  ];

  const stateList = [
    {
      label: 'Alabama',
      value: 'Alabama',
    },
    {
      label: 'Alaska',
      value: 'Alaska',
    },
    {
      label: 'Arizona',
      value: 'Arizona',
    },
  ];

  const majorList = [
    {
      label: 'Science',
      value: 'Science',
    },
    {
      label: 'Commerce',
      value: 'Commerce',
    },
    {
      label: 'Arts',
      value: 'Arts',
    },
  ];

  const disabilitiesList = [
    {
      label: 'None',
      value: 'None',
    },
    {
      label: 'Autism',
      value: 'Autism',
    },
    {
      label: 'Mental Health',
      value: 'Mental Health',
    },
  ];

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      dob: '',
      email: '',
      phone_number: '',
      address: '',
      zip_code: '',
      current_school: '',
      major: null,
      gender: null,
      race: null,
      disablities: null,
      state: null,
      password: '',
      password_confirmation: '',
      parent_phone_number: null,
      parent_name: '',
      parent_email: '',
      current_grade: '',
      current_gpa: '',
      special_needs: '',
    },
    validationSchema: validateSchema,
    // onSubmit: (val) => {
    //   if (addMoreStudent) {
    //     _addStudent(val);
    //   } else {
    //     _doSubmitForm(val);
    //   }
    // },
  });

  const _doSubmitForm = () => {
    let data = {...formik.values, profile_picture: profilePicture};

    if (signUpData.parentData.student.length === 0) {
      dispatch(addParentSignupStudent(data));
      dispatch(signUpParant());
    } else {
      dispatch(signUpParant());
    }
  };

  const toggleCalendar = () => {
    setCalendarStatus(!calendarStatus);
  };

  const getDate = (day) => {
    formik.setFieldValue('dob', day.dateString);
    setCalendarStatus(!calendarStatus);
  };

  const _addStudent = (val) => {
    let student = {...formik.values, profile_picture: profilePicture};
    dispatch(addParentSignupStudent(student));
    formik.resetForm();
    ToastAndroid.show('Student Added!', ToastAndroid.SHORT);
  };

  const requestCameraPermission = async () => {
    try {
      const result = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ],
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] &&
        result['android.permission.CAMERA'] === 'granted'
      ) {
        console.log('You can use the camera');
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const selectPhoto = async () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    try {
      const permission = await requestCameraPermission();
      if (permission) {
        await ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = response.uri;
            setImageUrl(source);
            setTimeout(() => {
              editProfile(response);
            });
          }
        });
      } else {
        console.log('No permission');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editProfile = (image) => {
    // console.log('imageurl:', image.uri);
    setIsImageUploading((isupload) => !isupload);
    const formData = new FormData();
    formData.append('files', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });
    return fetch(`https://sistemsystems.com/api/v1/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('hello----', responseJson);
        setProfilePicture(responseJson.upload_path);
        setIsImageUploading((isupload) => !isupload);
        ToastAndroid.show('Photo uploaded!', ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.error(error);
        setIsImageUploading((isupload) => !isupload);
        ToastAndroid.show('Error!', ToastAndroid.SHORT);
      });
  };

  return (
    <>
      {calendarStatus && (
        <CalendarView
          onDayPress={getDate}
          horizontal={true}
          pagingEnabled={true}
          calendarWidth={wp('80%')}
        />
      )}
      {signUpData.renderForm === 'Parent' && (
        <>
          <FormTextField
            labelText={'First Name'}
            onChangeText={formik.handleChange('first_name')}
            errorText={formik.errors.first_name}
            leftIcon={
              <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
            }
            value={formik.values.first_name}
            touched={formik.touched.first_name}
            handleBlur={formik.handleBlur('first_name')}
          />
          <FormTextField
            labelText={'Last Name'}
            onChangeText={formik.handleChange('last_name')}
            errorText={formik.errors.last_name}
            leftIcon={
              <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
            }
            value={formik.values.last_name}
            touched={formik.touched.last_name}
            handleBlur={formik.handleBlur('last_name')}
          />

          <FormTextField
            labelText={'Email Address'}
            onChangeText={formik.handleChange('email')}
            errorText={formik.errors.email}
            leftIcon={
              <MaterialCommunityIcons
                name={'email-edit-outline'}
                size={wp('5%')}
                color={'#E2E1E1'}
              />
            }
            value={formik.values.email}
            touched={formik.touched.email}
            handleBlur={formik.handleBlur('email')}
          />
          <FormTextField
            labelText={'Phone Number'}
            onChangeText={formik.handleChange('phone_number')}
            errorText={formik.errors.phone_number}
            leftIcon={
              <Feather
                name={'phone-forwarded'}
                size={wp('5%')}
                color={'#E2E1E1'}
              />
            }
            value={formik.values.phone_number}
            touched={formik.touched.phone_number}
            handleBlur={formik.handleBlur('phone_number')}
          />
        </>
      )}
      <DropdownDateofBirth
        label={'Date of birth'}
        value={formik.values.dob}
        onPress={toggleCalendar}
        customStyle={{marginBottom: hp('2%')}}
      />
      <Dropdown
        label={'Gender'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={formik.values.gender}
        items={GenderList}
        onChange={formik.handleChange('gender')}
        customStyle={{marginBottom: hp('2%')}}
      />
      <Dropdown
        label={'Race'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={formik.values.race}
        items={raceList}
        onChange={formik.handleChange('race')}
        customStyle={{marginBottom: hp('2%')}}
      />
      <FormTextField
        labelText={'Address'}
        onChangeText={formik.handleChange('address')}
        errorText={formik.errors.address}
        leftIcon={
          <MaterialCommunityIcons
            name={'email-edit-outline'}
            size={wp('5%')}
            color={'#E2E1E1'}
          />
        }
        value={formik.values.address}
        touched={formik.touched.address}
        handleBlur={formik.handleBlur('address')}
      />
      <Dropdown
        label={'State of residence'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={formik.values.state}
        items={stateDataJson}
        onChange={formik.handleChange('state')}
        customStyle={{marginBottom: hp('2%')}}
      />
      <FormTextField
        labelText={'Zip Code'}
        onChangeText={formik.handleChange('zip_code')}
        errorText={formik.errors.zip_code}
        leftIcon={<AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />}
        value={formik.values.zip_code}
        touched={formik.touched.zip_code}
        handleBlur={formik.handleBlur('zip_code')}
      />
      <FormTextField
        labelText={'Current School'}
        onChangeText={formik.handleChange('current_school')}
        errorText={formik.errors.current_school}
        leftIcon={<AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />}
        value={formik.values.current_school}
        touched={formik.touched.current_school}
        handleBlur={formik.handleBlur('current_school')}
      />
      <FormTextField
        labelText={'Current Grade'}
        onChangeText={formik.handleChange('current_grade')}
        errorText={formik.errors.current_grade}
        leftIcon={
          <MaterialIcons name={'grade'} size={wp('5%')} color={'#E2E1E1'} />
        }
        value={formik.values.current_grade}
        touched={formik.touched.current_grade}
        handleBlur={formik.handleBlur('current_grade')}
      />
      <FormTextField
        labelText={'Current GPA'}
        onChangeText={formik.handleChange('current_gpa')}
        errorText={formik.errors.current_gpa}
        leftIcon={
          <MaterialIcons name={'grade'} size={wp('5%')} color={'#E2E1E1'} />
        }
        value={formik.values.current_gpa}
        touched={formik.touched.current_gpa}
        handleBlur={formik.handleBlur('current_gpa')}
      />
      <Dropdown
        label={'Major'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={formik.values.major}
        items={majorList}
        onChange={formik.handleChange('major')}
        customStyle={{marginBottom: hp('2%')}}
      />
      {signUpData.renderForm === 'Student' && (
        <>
          <FormTextField
            labelText={'Parent Name (Optional)'}
            onChangeText={formik.handleChange('parent_name')}
            errorText={formik.errors.parent_name}
            leftIcon={
              <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
            }
            value={formik.values.parent_name}
            touched={formik.touched.parent_name}
            handleBlur={formik.handleBlur('parent_name')}
          />
          <FormTextField
            labelText={'Parent email (Optional)'}
            onChangeText={formik.handleChange('parent_email')}
            errorText={formik.errors.parent_email}
            leftIcon={
              <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
            }
            value={formik.values.parent_email}
            touched={formik.touched.parent_email}
            handleBlur={formik.handleBlur('parent_email')}
          />
          <FormTextField
            labelText={'Parent Phone (Optional)'}
            onChangeText={formik.handleChange('parent_phone_number')}
            errorText={formik.errors.parent_phone_number}
            leftIcon={
              <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
            }
            value={formik.values.parent_phone_number}
            touched={formik.touched.parent_phone_number}
            handleBlur={formik.handleBlur('parent_phone_number')}
          />
        </>
      )}
      <Dropdown
        label={'Disabilities'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={formik.values.disablities}
        items={disabilitiesList}
        onChange={formik.handleChange('disablities')}
        customStyle={{marginBottom: hp('2%')}}
      />
      {signUpData.renderForm === 'Parent' && (
        <>
          <FormTextField
            labelText="Password"
            leftIcon={
              <EvilIcons name={'lock'} size={wp('8%')} color={'#E2E1E1'} />
            }
            errorText={formik.errors.password}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            secureTextEntry={true}
            handleBlur={formik.handleBlur('password')}
            touched={formik.touched.password}
          />

          <FormTextField
            labelText="Confirm Password"
            leftIcon={
              <EvilIcons name={'lock'} size={wp('8%')} color={'#E2E1E1'} />
            }
            errorText={formik.errors.password_confirmation}
            onChangeText={formik.handleChange('password_confirmation')}
            value={formik.values.password_confirmation}
            secureTextEntry={true}
            handleBlur={formik.handleBlur('password_confirmation')}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: wp('4%'),
              paddingVertical: 10,
            }}>
            <Entypo name="plus" size={30} color={THEME_COLOR} />
            <PlainButton
              text={'ADD STUDENT'}
              textStyle={{
                color: THEME_COLOR,
                fontWeight: 'bold',
                fontSize: 16,
              }}
              onClick={() => {
                _addStudent();
              }}
            />
          </View>
        </>
      )}
      {signUpData.renderForm === 'Student' && (
        <FormTextField
          labelText={'Do you have any special needs?'}
          onChangeText={formik.handleChange('special_needs')}
          errorText={formik.errors.special_needs}
          leftIcon={
            <MaterialIcons
              name={'child-care'}
              size={wp('5%')}
              color={'#E2E1E1'}
            />
          }
          value={formik.values.special_needs}
          touched={formik.touched.special_needs}
          handleBlur={formik.handleBlur('special_needs')}
        />
      )}
      {/* {signUpData.renderForm === 'Parent' && <></>} */}
      <View
        style={{
          backgroundColor: '#EEEEEE',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: wp('4%'),
          paddingVertical: 10,
        }}>
        <Feather name="upload" size={24} color="black" />
        <PlainButton
          text={isImageUploading ? 'Uploading...' : 'Click here to upload'}
          textStyle={{
            color: INACTIVE_COLOR,
          }}
          buttonStyle={{
            backgroundColor: SILVER_COLOR,
            marginLeft: hp('2%'),
          }}
          onClick={selectPhoto}
        />
      </View>
      <PlainButton
        text={signUpData.loading ? 'Loading...' : 'Continue'}
        textStyle={{
          color: WHITE_COLOR,
          fontSize: wp('5%'),
          letterSpacing: 1,
        }}
        buttonStyle={{
          backgroundColor: THEME_COLOR,
          height: hp('6%'),
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: wp('6%'),
          borderRadius: 5,
        }}
        onClick={() => {
          let data = {
            dob: formik.values.dob,
            profile_picture: profilePicture,
            gender: formik.values.gender,
            race: formik.values.race,
            address: formik.values.address,
            state: formik.values.state,
            zip_code: formik.values.zip_code,
            current_grade: formik.values.current_grade,
            current_gpa: formik.values.current_gpa,
            major: formik.values.major,
            disablities: formik.values.disablities,
            special_needs: formik.values.special_needs,
            parent_phone_number: formik.values.parent_phone_number,
            parent_email: formik.values.parent_email,
            parent_name: formik.values.parent_name,
          };
          if (signUpData.renderForm === 'Student') {
            dispatch(signUpStudentData(data));
            dispatch(signUpStudent());
          } else {
            _doSubmitForm();
          }
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: wp('2%'),
    color: BLACK_COLOR,
  },
});

export default StudentForm;
