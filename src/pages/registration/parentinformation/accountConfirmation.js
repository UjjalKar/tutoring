import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {PlainButton} from '../../../components/plainButton';
import {PlainButton} from '@/components/plainButton';
import {
  THEME_COLOR,
  SILVER_COLOR,
  INACTIVE_COLOR,
  WHITE_COLOR,
} from '@/constants/colors/Colors';

const AccountConfirmation = (props) => {
  return (
    <>
      <View style={{marginVertical: hp('4%')}}>
        <Text style={styles.parentInfo}>Account Confirmation</Text>
        <Text style={styles.knowBetter}>
          {' '}
          A confirmation email has been sent to the email address you provided
        </Text>
      </View>

      <PlainButton
        text={'Done'}
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
        onClick={props.onClick}
      />
    </>
  );
};

const styles = StyleSheet.create({
  parentInfo: {
    alignSelf: 'center',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#2F2E2E',
    marginBottom: wp('4%'),
  },
  knowBetter: {
    textAlign: 'center',
    fontSize: wp('4%'),
    fontWeight: '300',
  },
});

export default AccountConfirmation;
