import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  THEME_COLOR,
  INACTIVE_COLOR,
  BLACK_COLOR,
  BORDER_INACTIVE_COLOR,
} from '../constants/colors/Colors';
import Feather from 'react-native-vector-icons/Feather';
const Dropdown = ({
  onChange,
  items,
  value,
  placeholder,
  label,
  customStyle,
}) => {
  const inputRefs = {
    firstTextInput: null,
    favYear: null,
  };
  return (
    <View style={customStyle}>
      <Text style={{marginBottom: hp('1%'), color: '#2F2E2E'}}>{label}</Text>
      <View
        style={{
          alignItems: 'center',
          borderWidth: 1,
          borderColor: value ? THEME_COLOR : BORDER_INACTIVE_COLOR,
        }}>
        <RNPickerSelect
          placeholder={placeholder}
          items={items}
          value={value}
          placeholderTextColor="#000000"
          onValueChange={(val) => {
            onChange(val);
          }}
          onUpArrow={() => {
            inputRefs.firstTextInput.focus();
          }}
          onDownArrow={() => {
            inputRefs.favYear.togglePicker();
          }}
          style={pickerSelectStyles}
          // value={ value }
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <Feather name="chevron-down" size={24} color="black" />;
          }}
          ref={(el) => {
            inputRefs.favYear = el;
          }}
        />
      </View>
    </View>
  );
};

export default Dropdown;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    color: 'black',
    paddingRight: '30%', // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: '100%',
    height: 38,
    fontSize: 14,
    marginHorizontal: 0,
    borderWidth: 0.5,
    borderColor: 'transparent',
    borderRadius: 8,
    color: '#000',
    paddingRight: '75%',
    // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 8,
    left: '90%',
  },
});
