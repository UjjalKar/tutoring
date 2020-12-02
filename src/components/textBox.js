import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  INACTIVE_COLOR,
  BLACK_COLOR,
  BORDER_INACTIVE_COLOR,
} from '../constants/colors/Colors';

const TextBox = ({
  label,
  value = '',
  onChangeText,
  customStyle,
  multiline = false,
}) => {
  return (
    <View style={[styles.textBox, customStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        // value={value}
        style={styles.input}
        multiline={multiline}
      />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  textBox: {
    minHeight: hp('9%'),
  },
  label: {
    marginBottom: hp('1%'),
    color: BLACK_COLOR,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER_INACTIVE_COLOR,
    paddingHorizontal: 22,
  },
});
