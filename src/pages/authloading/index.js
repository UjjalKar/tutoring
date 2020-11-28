import React, {useState, useEffect} from 'react';
import {getData} from '../../helpers/storage';

const Authloading = (props) => {
  useEffect(() => {
    getData('status').then((response) => {
      if (response) {
        if (
          response.walkthrough_status == 'completed' &&
          response.auth_tatus == true
        ) {
          //go to dashboard
        } else if (
          response.walkthrough_status == 'completed' &&
          response.auth_tatus == false
        ) {
          props.navigation.navigate('Auth');
        }
      } else {
        props.navigation.navigate('Walkthrough');
      }
    });
  }, []);

  return null;
};

export default Authloading;
