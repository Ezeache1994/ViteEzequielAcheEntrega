import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyDxPKI5Hp4lc3vxf3Hqb-jWdv5PkiNG5-U",
  authDomain: "entregareactezequielache.firebaseapp.com",
  projectId: "entregareactezequielache",
  storageBucket: "entregareactezequielache.appspot.com",
  messagingSenderId: "909853643373",
  appId: "1:909853643373:web:e1173bcb8587c5f72aa564",
  measurementId: "G-S96PK5JK4R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
