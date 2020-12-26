const form = document.querySelector('#sign-up-form');

// EDIT THESE TO YOUR VALUES!
const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: '',
  ClientId: ''
});

/**
 * Event handling
 */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  signUp(formData);
});

/**
 * Authentication/sign-up logic
 */
function signUp(formData) {
  const attributes = [
    {
      Name: 'name',
      Value: formData.name
    },
    {
      Name: 'nickname',
      Value: formData.nickname
    },
    {
      Name: 'phone_number',
      Value: formData.phone
    }
  ];

  userPool.signUp(formData.email, formData.password, attributes, null, onSignUp);
}

/**
 * Functionality
 */
function onSignUp(err, userData) {
  if (err) return alert(JSON.stringify(err));
  else confirmUser(userData.user);
}

function confirmUser(user) {
  const confirmCode = prompt('Confirmation code:');
  user.confirmRegistration(confirmCode, true, onConfirmed);
}

function onConfirmed(err) {
  if (err) return alert(JSON.stringify(err));
  else alert('Success');
}
