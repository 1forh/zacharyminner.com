import firebase from 'firebase/app';
// Add additional services that you want to use
// import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/messaging'
// import 'firebase/functions'

// Flamelink app is always required
import flamelink from 'flamelink/app';
// Add additional modules that you want to use
import 'flamelink/content';
import 'flamelink/storage';
// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

const firebaseConfig = {
  apiKey: 'AIzaSyDGOR12Ptx7CmSIYyKhWm7QCg6u6-NYy80',
  authDomain: 'zachary-minner.firebaseapp.com',
  databaseURL: 'https://zachary-minner.firebaseio.com',
  projectId: 'zachary-minner',
  storageBucket: 'zachary-minner.appspot.com',
  messagingSenderId: '394578123285',
  appId: '1:394578123285:web:a95cf6ca81d854370c8c1c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const FlamelinkPlugin = {
  install(Vue) {
    const app = flamelink({
      firebaseApp,
      env: 'production',
      locale: 'en-US',
      dbType: 'cf',
    });

    /* eslint-disable no-param-reassign */
    Vue.prototype.$flamelink = app;
    Vue.flamelink = app;
  },
};

export default FlamelinkPlugin;

// Firebase app is always required and must be first
