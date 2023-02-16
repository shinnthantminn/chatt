import React from 'react';
import ChatApp from './src/ChatApp';

// Your web app's Firebase configuration

// Initialize Firebase

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJmsdOjrhQ-qJKvwqa2RRYqCseLk_9gvg',
  authDomain: 'chatting-862e8.firebaseapp.com',
  databaseURL:
    'https://chatting-862e8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chatting-862e8',
  storageBucket: 'chatting-862e8.appspot.com',
  messagingSenderId: '962406469733',
  appId: '1:962406469733:web:b815e54f86b33f0b10b68c',
  measurementId: 'G-0F0N68E8V3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const App = () => {
  return <ChatApp />;
};

export default App;
