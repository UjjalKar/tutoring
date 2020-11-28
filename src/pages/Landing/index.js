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
  ImageBackground,
} from 'react-native';
import {
  LANDING_BACKGROUND_IMAGE,
  LOGO_IMAGE,
} from '../../constants/imagepath/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../../constants/fonts/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PlainButton} from '../../components/plainButton';
import {THEME_COLOR, WHITE_COLOR} from '../../constants/colors/Colors';

const Landing = (props) => {
  const [userName, onChangeUsername] = useState('');
  const [pass, onChangePass] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaViewconatiner}>
      <ImageBackground
        style={styles.container}
        source={LANDING_BACKGROUND_IMAGE}
        resizeMode="cover">
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
            color={WHITE_COLOR}
            style={{fontSize: wp('10%')}}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: wp('30%'),
            }}>
            <Text
              style={{
                color: WHITE_COLOR,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              }}>
              The best{' '}
              <Text
                style={{color: THEME_COLOR, fontWeight: 'bold', fontSize: 26}}>
                {' '}
                tutors
              </Text>
              <Text
                style={{
                  color: WHITE_COLOR,
                  fontWeight: 'bold',
                  fontSize: 26,
                  textAlign: 'center',
                }}>
                {' '}
                and learning resources for you
              </Text>
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: wp('4%'),
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                color: WHITE_COLOR,
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Sistem Tutoring Agency enables students get lessons online or in
              person, with tutors of their choice. They can also access videos
              and podcasts for their educational needs.
            </Text>
          </View>

          <View style={{marginHorizontal: wp('20%'), marginTop: wp('8%')}}>
            <PlainButton
              text={'Join as parent/student'}
              textStyle={{
                color: WHITE_COLOR,
                fontSize: wp('4%'),
              }}
              buttonStyle={{
                backgroundColor: '#5CE0EB',
                height: hp('6%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
              onClick={() => props.navigation.navigate('SignUpStack')}
            />
          </View>

          <View style={{marginHorizontal: wp('20%'), marginTop: wp('8%')}}>
            <PlainButton
              text={'Join as Tutor'}
              textStyle={{
                color: WHITE_COLOR,
                fontSize: wp('4%'),
              }}
              buttonStyle={{
                height: hp('6%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: WHITE_COLOR,
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
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
export default Landing;
