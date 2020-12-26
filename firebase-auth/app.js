// UI references
const userdata = document.querySelector('div#userdata');
const emailField = document.querySelector('input[name="email"]');
const passwordField = document.querySelector('input[name="password"]');
const signupButton = document.querySelector('button#signup');
const signinButton = document.querySelector('button#signin');
const signoutButton = document.querySelector('button#signout');

// Firebase configuration, paste your config here
const firebaseConfig = {
  apiKey: '',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: '',
  appId: ''
};

firebase.initializeApp(firebaseConfig);

/**
 * Event handling
 */
signupButton.addEventListener('click', (event) => {
  event.preventDefault();
  const { email, password } = getFields();
  signupUser(email, password);
});

signinButton.addEventListener('click', (event) => {
  event.preventDefault();
  const { email, password } = getFields();
  signinUser(email, password);
});

signoutButton.addEventListener('click', (event) => {
  event.preventDefault();
  signoutUser();
});

// Functionality and logic
function getFields() {
  return {
    email: emailField.value,
    password: passwordField.value
  };
}

/**
 * Sign in, sign up, sign out
 */
function signupUser(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => console.log('Signed up!', user))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}

function signinUser(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => console.log('Signed in!', user))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}

function signoutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => alert('You are now logged out!'))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}

/**
 * State updates and management
 */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { email, uid } = user;
    console.log('STATE: User is logged in', email, uid);
    renderUiLoggedIn(email, uid);
  } else {
    console.log('STATE: User is logged out');
    renderUiLoggedOut();
  }
});

/**
 * User interface
 */
function renderUiLoggedIn(email, uid) {
  userdata.innerHTML = `Logged in with user <strong>${email}</strong>, having UID <strong>${uid}</strong>`;
  emailField.classList.add('hide');
  passwordField.classList.add('hide');
  signupButton.classList.add('hide');
  signinButton.classList.add('hide');
  signoutButton.classList.remove('hide');
}

function renderUiLoggedOut() {
  userdata.innerHTML = '';
  signupButton.classList.remove('hide');
  signinButton.classList.remove('hide');
  signoutButton.classList.add('hide');
}