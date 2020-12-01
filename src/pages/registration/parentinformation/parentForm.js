import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {signUpUser} from '../../../Redux/Actions/signUpAction';
const CommonToast = require('@/Common/common-toast/index');

const Form = (props) => {
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.signUpData);

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

  const numberList = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ];

  const occupationList = [
    {
      label: 'Doctor',
      value: 'Doctor',
    },
    {
      label: 'Engineer',
      value: 'Engineer',
    },
    {
      label: 'Consultant',
      value: 'Consultant',
    },
    {
      label: 'Educator',
      value: 'Educator',
    },
    {
      label: 'Home Maker',
      value: 'Home Maker',
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

  const [calendarStatus, setCalendarStatus] = useState(false);
  const [dob, setDob] = useState('');
  const [gender, setGenderList] = useState(null);
  const [race, setRaceList] = useState(null);
  const [Occupation, setOccupationList] = useState(null);
  const [numberOfKids, setNumberrList] = useState(null);
  const [state, setStateList] = useState(null);
  const [address, onChangeAddress] = useState('');
  const [zipcode, onChangeZipCode] = useState('');
  const [source, setImageUrl] = useState(null);

  const toggleCalendar = () => {
    setCalendarStatus(!calendarStatus);
  };

  const getDate = (day) => {
    setDob(day.dateString);
    setCalendarStatus(!calendarStatus);
  };

  // useEffect(() => {
  //   requestCameraPermission();
  // }, []);

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
  };

  const doValidation = () => {
    if (state == null) {
      CommonToast.showToast('State of residence is required');
      console.warn('State of residence is required');
      return;
    }
    if (dob == '') {
      CommonToast.showToast('Date of birth is required');
      console.warn('Date of birth is required');
      return;
    }
    if (address == '') {
      CommonToast.showToast('address is required');
      console.warn('address is required');
      return;
    }
    if (gender == null) {
      // CommonToast.showToast('Gender is required');
      console.warn('Gender is required');
      return;
    }
    if (zipcode == '') {
      // CommonToast.showToast('zipcode is required');
      console.warn('zipcode is required');
      return;
    }
    if (race == null) {
      // CommonToast.showToast('race is required');
      console.warn('race is required');
      return;
    }
    if (Occupation == null) {
      // CommonToast.showToast('Occupation is required');
      console.warn('Occupation is required');
      return;
    }
    if (numberOfKids == null) {
      // CommonToast.showToast('Number of kids is required');
      console.warn('Number of kids is required');

      return;
    }
    // if (source == null) {
    //     CommonToast.showToast("please select image")
    //     return
    // }
    let signUpFromValue = {
      state: state,
      address: address,
      gender: gender,
      zipCode: zipcode,
      Occupation: Occupation,
      race: race,
      number_of_kids: numberOfKids,
    };
    dispatch(signUpUser(signUpFromValue));
    console.log(JSON.stringify(signUpData));
  };

  const editProfile = (image) => {
    console.log('imageurl:', source);
    const formData = new FormData();
    formData.append('files', {
      uri:
        Platform.OS == 'ios'
          ? image.uri.replace('file://', '/private')
          : image.uri,
      name: 'photo.jpg',
      type: 'image/jpg',
    });
    return fetch(`http://18.217.121.144/api/v1/upload`, {
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {calendarStatus && <CalendarView onDayPress={getDate} />}
      <Dropdown
        label={'State of residence'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={state}
        items={stateList}
        onChange={setStateList}
        customStyle={{marginBottom: hp('2%')}}
      />
      <DropdownDateofBirth
        label={'Date of birth'}
        value={dob}
        onPress={toggleCalendar}
        customStyle={{marginBottom: hp('2%')}}
      />
      <View style={{marginBottom: wp('6%')}}>
        <Text style={styles.label}>Address</Text>
        <View
          style={[
            {
              height: hp('6%'),
              borderColor: address == '' ? '#EEEEEE' : '#5EE1E8',
              borderWidth: 1,
            },
            {flexDirection: 'row'},
          ]}>
          <View
            style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
            <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
          </View>
          <TextInput
            style={{flex: 0.9, paddingLeft: 5}}
            value={address}
            onChangeText={(text) => {
              onChangeAddress(text);
            }}
          />
        </View>
      </View>
      <Dropdown
        label={'Gender'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={gender}
        items={GenderList}
        onChange={setGenderList}
        customStyle={{marginBottom: hp('2%')}}
      />
      <View style={{marginBottom: wp('6%')}}>
        <Text style={styles.label}>Zip Code</Text>
        <View
          style={[
            {
              height: hp('6%'),
              borderColor: zipcode == '' ? '#EEEEEE' : '#5EE1E8',
              borderWidth: 1,
            },
            {flexDirection: 'row'},
          ]}>
          <View
            style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
            <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} />
          </View>
          <TextInput
            style={{flex: 0.9, paddingLeft: 5}}
            value={zipcode}
            onChangeText={(text) => {
              onChangeZipCode(text);
            }}
          />
        </View>
      </View>
      <Dropdown
        label={'Race'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={race}
        items={raceList}
        onChange={setRaceList}
        customStyle={{marginBottom: hp('2%')}}
      />
      <Dropdown
        label={'Occupation'}
        placeholder={{
          label: 'Choose one',
          value: 'Choose one',
          color: 'red',
        }}
        value={Occupation}
        items={occupationList}
        onChange={setOccupationList}
        customStyle={{marginBottom: hp('2%')}}
      />
      <Dropdown
        label={'Number of kids'}
        placeholder={{
          label: 'Choose one',
          value: null,
          color: 'red',
        }}
        value={numberOfKids}
        items={numberList}
        onChange={setNumberrList}
        customStyle={{marginBottom: hp('2%')}}
      />

      <PlainButton
        text={
          'Upload clear photograph (format: png,jpeg. file should not be more then 10 mb'
        }
        textStyle={{
          color: '#2F2E2E',
          marginBottom: 15,
        }}
      />

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
          text={'Click here to upload'}
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
        text={'Continue'}
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
        onClick={() => doValidation()}
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

export default Form;
