import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BLUE_CIRCLE, LOGO_IMAGE} from '../../../constants/imagepath/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../../../constants/fonts/Fonts';
import {THEME_COLOR, WHITE_COLOR} from '../../../constants/colors/Colors';
import {PlainButton} from '../../../components/plainButton';

const ParentOrStudent = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewconatiner}>
      <View style={styles.container}>
        <Image
          source={BLUE_CIRCLE}
          style={{
            width: wp('55%'),
            height: wp('55%'),
            marginLeft: wp('80%'),
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            source={LOGO_IMAGE}
            style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <PlainButton
            text={`I am a Student`}
            //onClick={() => setId(1)}
            buttonStyle={[styles.buttonContainer, {marginBottom: hp('5%')}]}
            textStyle={styles.buttonText}
          />

          <PlainButton
            text={`I am a PARENT`}
            //onClick={() => setId(0)}
            buttonStyle={[styles.buttonContainer, {marginBottom: hp('5%')}]}
            textStyle={styles.buttonText}
          />

          <Image
            source={BLUE_CIRCLE}
            style={{
              width: wp('20%'),
              height: wp('20%'),
            }}
          />
        </View>
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
    paddingHorizontal: 22,
  },
  imageContainer: {
    width: wp('70%'),
    height: hp('8%'),
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('50%'),
    paddingVertical: wp('3%'),
  },
  buttonText: {
    color: WHITE_COLOR,
    fontFamily: Fonts.MulishRegular,
    fontSize: wp('4%'),
  },
});
export default ParentOrStudent;
