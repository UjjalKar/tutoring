import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {LOGO_IMAGE} from '../../constants/imagepath/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../../constants/fonts/Fonts';
import {THEME_COLOR, WHITE_COLOR} from '../../constants/colors/Colors';
import {storeData} from '../../helpers/storage';
import {PlainButton} from '../../components/plainButton';
const Walkthrough = (props) => {
  const [contentId, setContentid] = useState(0);

  const textArr = [
    {
      upperContent: 'Learn STEM Subjects',
      bottomContent: 'Teach Anyone.',
      buttonText: 'let’s get started',
    },
    {
      upperContent: 'Connect with Experts',
      bottomContent:
        'Talk to tutors, message them in In real-time and request a online or in-person session',
      buttonText: 'Next',
    },
    {
      upperContent: 'Security and Privacy',
      bottomContent: '',
      buttonText: 'Next',
    },
    {
      upperContent: 'Become a SiSTEM Tutor',
      bottomContent:
        'Turn your knowledge into extra cash. Teach from a variety for STEM Subjects',
      buttonText: 'Ok I GOT IT.',
    },
    {
      upperContent: '',
      bottomContent: '',
      buttonText: 'let’s get started',
    },
  ];
  nextContent = () => {
    if (contentId + 1 < textArr.length) {
      setContentid(contentId + 1);
    } else {
      storeData('status', {walkthrough_status: 'completed', auth_tatus: false});
      props.navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaViewconatiner}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={LOGO_IMAGE}
            style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: wp('10%'),
          }}>
          <Text style={styles.upperContent}>
            {textArr[contentId].upperContent}
          </Text>
          <Text style={styles.bottomContent}>
            {textArr[contentId].bottomContent}
          </Text>
        </View>
        <PlainButton
          text={textArr[contentId].buttonText}
          onClick={nextContent}
          buttonStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
        />
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
    justifyContent: 'space-between',
    marginVertical: hp('4%'),
  },
  imageContainer: {
    width: wp('70%'),
    height: hp('8%'),
    alignSelf: 'center',
  },
  buttonContainer: {
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    backgroundColor: THEME_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'capitalize',
    color: WHITE_COLOR,
    fontSize: wp('5%'),
    fontFamily: Fonts.MulishRegular,
  },
  upperContent: {
    fontSize: wp('5%'),
    fontFamily: Fonts.MulishRegular,
  },
  bottomContent: {
    fontSize: wp('5%'),
    marginTop: hp('3%'),
    textAlign: 'center',
    fontFamily: Fonts.MulishRegular,
  },
});
export default Walkthrough;
