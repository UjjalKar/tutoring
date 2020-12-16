import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

import ParentForm from './parentForm';
import StudentForm from './studentFrom';
import Circle from '../../../components/circle';
import AccountConfirmation from './accountConfirmation';
import {LOGO_IMAGE} from '../../../constants/imagepath/Imagepath';
import {THEME_COLOR, WHITE_COLOR} from '../../../constants/colors/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PlainButton} from '../../../components/plainButton';

const ParentInformation = (props) => {
  const [indicator, setIndicator] = useState(0);
  const signUpData = useSelector((state) => state.signUpData);

  const addStudent = () => {
    return (
      <>
        <Text>hello i am girl</Text>
        <StudentForm />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 12,
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
            color="#2A2A2A"
            style={{fontSize: wp('10%')}}
          />
        </View>
        <View style={styles.pageContainer}>
          <View style={styles.indicatorContainer}>
            <Circle
              selected={indicator >= 0}
              text={1}
              onClick={() => setIndicator(0)}
            />
            <Circle
              selected={indicator >= 1 && indicator <= 2}
              text={2}
              onClick={() => setIndicator(1)}
            />
            <Circle
              selected={indicator == 2}
              text={3}
              onClick={() => setIndicator(2)}
            />
          </View>
          {indicator == 0 && (
            <View style={{marginVertical: hp('6%')}}>
              <Text style={styles.parentInfo}>Parent Information</Text>
              <Text style={styles.knowBetter}>Help us know you better</Text>
            </View>
          )}

          {indicator == 1 && (
            <>
              <View style={{marginVertical: hp('4%')}}>
                <Text style={styles.parentInfo}>Student Information</Text>
              </View>
              <View>
                <Text
                  style={{
                    marginBottom: wp('3%'),
                    color: THEME_COLOR,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Student{signUpData.parentData.student.length + 1}
                </Text>
              </View>
            </>
          )}

          {/* <KeyboardAvoidingView
            behavior={'padding'}
            enabled
            keyboardVerticalOffset={140}
            style={{
              flex: 1,
            }}> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{flexGrow: 1}}>
            {indicator == 0 && <ParentForm onClick={() => setIndicator(1)} />}
            {indicator == 1 && <StudentForm onClick={() => setIndicator(2)} />}
            {indicator == 2 && <AccountConfirmation />}
          </ScrollView>
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const StudentInformation = (props) => {
  const [indicator, setIndicator] = useState(0);
  const addStudent = () => {
    return (
      <>
        <Text>hello i am girl</Text>
        <StudentForm />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 12,
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
            color="#2A2A2A"
            style={{fontSize: wp('10%')}}
          />
        </View>
        <View style={styles.pageContainer}>
          <View
            style={{
              height: hp('6%'),
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Circle
              selected={indicator >= 0}
              text={1}
              onClick={() => setIndicator(0)}
            />
            <Circle
              selected={indicator >= 1 && indicator <= 2}
              text={2}
              onClick={() => setIndicator(1)}
            />
          </View>
          {indicator == 0 && (
            <View style={{marginVertical: hp('6%')}}>
              <Text style={styles.parentInfo}>Student Information</Text>
              <Text style={styles.knowBetter}>Help us know you better</Text>
            </View>
          )}

          {indicator == 1 && (
            <>
              <View style={{marginVertical: hp('4%')}}>
                <Text style={styles.parentInfo}>Student Information</Text>
              </View>
              <View>
                <Text
                  style={{
                    marginBottom: wp('3%'),
                    color: THEME_COLOR,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Student1
                </Text>
              </View>
            </>
          )}

          {/* <KeyboardAvoidingView
            behavior={'padding'}
            enabled
            keyboardVerticalOffset={140}
            style={{
              flex: 1,
            }}> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{flexGrow: 1}}>
            {indicator == 0 && <StudentForm onClick={() => setIndicator(1)} />}
            {indicator == 1 && <AccountConfirmation />}
          </ScrollView>
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const Form = (props) => {
  const signUpData = useSelector((state) => state.signUpData);
  switch (signUpData.renderForm) {
    case 'Parent':
      return <ParentInformation />;
    case 'Student':
      return <StudentInformation />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 22,
  },
  imageContainer: {
    width: wp('40%'),
    height: hp('8%'),
    alignSelf: 'center',
  },
  indicatorContainer: {
    height: hp('6%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  parentInfo: {
    alignSelf: 'center',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#2F2E2E',
  },
  knowBetter: {
    alignSelf: 'center',
    fontSize: wp('4%'),
    fontWeight: '300',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
});

/* 
<KeyboardAvoidingView
            behavior={'padding'}
            enabled
            keyboardVerticalOffset={140}
            style={{
              flex: 1,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="always"
              contentContainerStyle={{flexGrow: 1}}>
              {indicator == 0 && <Form onClick={() => setIndicator(1)} />}
              {indicator == 1 && (
                <StudentForm
                  addStudent={() => addStudent()}
                  onClick={() => setIndicator(2)}
                />
              )}
              {indicator == 2 && <AccountConfirmation />}
            </ScrollView>
          </KeyboardAvoidingView>
*/
export default Form;
