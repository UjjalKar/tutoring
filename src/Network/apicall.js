import { Network } from "./index"

//Network will recieve 4 Arguments
// "method(type of request)",
// "endpoint ()", 
// "body (if POST method)"
// See the main function at ./network.js

export default class Apis {
 // <========================= Common api Post method =========================>
  static registration = (data) => {
    return Network('POST', 'register', data)
  }

  static login = (data) => {
    return Network('POST', 'login', data)
  }

  static forgotPassword = (data) => {
    return Network('POST', 'forgot-password', data)
  }

  static socialLogin = (data) => {
    return Network('POST', 'social-login', data)
  }

  static viewProfile = (data) => {
    return Network('POST', 'view-profile', data)
  }

  static editPhoneNo = (data) => {
    return Network('POST', 'edit-phoneNo', data)
  }


  static addFeedback = (data) => {
    return Network('POST', 'add-feedback',data)
  }

  static ContactUs = (data) => {
    return Network('POST', 'contact-us',data)
  }

  static push = (data) => {
    return Network('POST', 'test-push-notification',data)
  }
  
  // <========================= Common api Get method =========================>

  

  static skills_list = (data) => {
    return Network('GET', 'job-skill-list?page=1&limit=100', data)
  }

  static feedBack = (authtoken) => {
    // return Network('GET', 'job-skill-list?page=1&limit=100', data)
    return Network('GET','get-feedback-setting', {authtoken})
  }

  static aboutUs = (authtoken) => {
    return Network('GET', 'about-us',{authtoken})
  }

  static termsConditions = (content_type,language,authtoken) => {
    console.log("hello---------",content_type,language,authtoken)
    return Network('GET', 'list-term-condition?content_type=' + `${content_type}` + "&language=" + `${language}`,{authtoken})
  }

  static ListFAQ = (language,page,limit,authtoken) => {
    return Network('GET', 'list-faq?language=' + `${language}` + '&page=' + `${page}` + '&limit=' + `${limit}`,{authtoken})
  }


  static orderList = (page, limit, userId,speificDate,speificMonth,speificYear,authtoken) => {
    return Network('GET', 'order-list?page=' + `${page}` + '&limit=' + `${limit}` + '&user_id=' + `${userId}` + '&speificDate=' + `${speificDate}` + '&speificMonth=' + `${speificMonth}`  + '&speificYear=' + `${speificYear}`, {authtoken})
  }


}
