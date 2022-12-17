// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: 'AIzaSyA_XU6kYMzoBMvQ76QZrfpxGx3aLpcWfDg',
  authDomain: 'foood-8db84.firebaseapp.com',
  projectId: 'foood-8db84',
  storageBucket: 'foood-8db84.appspot.com',
  messagingSenderId: '105027482701',
  appId: '1:105027482701:web:fe259dc460093ac3d31804',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
