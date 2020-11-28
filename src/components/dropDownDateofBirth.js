import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  THEME_COLOR,
  INACTIVE_COLOR,
  BLACK_COLOR,
  BORDER_INACTIVE_COLOR,
} from '@/constants/colors/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
const DropdownDateofBirth = ({label, value = '', onPress, customStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.dropdown, customStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.dropdownBox,
          {borderColor: value ? THEME_COLOR : BORDER_INACTIVE_COLOR},
        ]}>
        <Text style={styles.value}>{value}</Text>
        <Entypo name={'chevron-thin-down'} size={18} />
      </View>
    </TouchableOpacity>
  );
};

export default DropdownDateofBirth;
const styles = StyleSheet.create({
  dropdown: {
    minHeight: hp('10%'),
  },
  label: {
    marginBottom: hp('1%'),
    color: '#2F2E2E',
  },
  dropdownBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 22,
  },
  value: {
    color: BLACK_COLOR,
  },
});
