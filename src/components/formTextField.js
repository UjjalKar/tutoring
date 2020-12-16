import * as React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLACK_COLOR} from '../constants/colors/Colors';

export default function FormTextField({
  labelText,
  errorText = '',
  leftIcon = <></>,
  onChangeText,
  value,
  secureTextEntry = false,
  handleBlur,
  touched,
}) {
  // console.log(touched);
  return (
    <View style={{marginBottom: wp('6%')}}>
      <Text style={styles.label}>{labelText}</Text>
      <View
        style={[
          {
            height: hp('6%'),
            // borderColor: lName == '' ? '#EEEEEE' : '#5EE1E8',
            borderColor: errorText !== '' ? 'red' : '#5EE1E8',
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
          {leftIcon}
          {/* <AntDesign name={'user'} size={wp('5%')} color={'#E2E1E1'} /> */}
        </View>
        <TextInput
          style={{flex: 0.9, paddingLeft: 5}}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onBlur={handleBlur}
        />
      </View>
      {errorText !== '' && <Text style={styles.errorLabel}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: wp('2%'),
    color: BLACK_COLOR,
  },
  errorLabel: {
    color: 'red',
    marginTop: wp('2%'),
  },
});
