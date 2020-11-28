import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export const PlainButton = ({text, onClick, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onClick} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
