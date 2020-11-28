import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {apiurl} from '../url/index';
const CommonToast = require('./../Common/common-toast/index');

//THIS CODE IS FOR DEBUGGIN NETWORK CALLES IN CHROME DEVTOOLS
//REMOVE THIS ON PRODUCTION BUILD

// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
//   GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

//Main method for network calls using axios

export const Network = (method, endpoint, data = {}) => {
  console.log('method, endpoint, data===>', method, endpoint, data);

  return new Promise((resolve, reject) => {
    //cheking network connection
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        if (method == 'GET') {
          axios({
            method,
            url: `${apiurl}${endpoint}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': data.authtoken ? data.authtoken : null,
            },
            body: data,
          })
            .then(function (response) {
              resolve(response);
            })
            .catch(function (error) {
              console.log(error);
              CommonToast.showToast('Something went wrong. Please try again !');
              reject(error);
            });
        } else {
          axios({
            method,
            url: `${apiurl}${endpoint}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': data.authtoken ? data.authtoken : null,
            },
            data,
          })
            .then(function (response) {
              resolve(response);
            })
            .catch(function (error) {
              console.log(error);
              CommonToast.showToast('Something went wrong. Please try again !');
              reject(error);
            });
        }
      } else {
        reject('No connection');
        CommonToast.showToast('Please check your internet connection !');
      }
    });
  });
};
