/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
  names: {
    signUpSignIn: 'b2c_1_authdemomikael',
    forgotPassword: 'b2c_1_reset',
    editProfile: 'b2c_1_edit_profile'
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://authdemomikael.b2clogin.com/authdemomikael.onmicrosoft.com/b2c_1_authdemomikael'
    },
    forgotPassword: {
      authority: 'https://authdemomikael.b2clogin.com/authdemomikael.onmicrosoft.com/b2c_1_reset'
    },
    editProfile: {
      authority:
        'https://authdemomikael.b2clogin.com/authdemomikael.onmicrosoft.com/b2c_1_edit_profile'
    }
  },
  authorityDomain: 'authdemomikael.b2clogin.com'
};
