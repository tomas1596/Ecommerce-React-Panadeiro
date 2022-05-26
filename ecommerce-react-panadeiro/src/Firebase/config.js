import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCokwj-L5i3I7VH0bRet0aOI_Tz8CrUdgw",
  authDomain: "ecommercepanadeiro.firebaseapp.com",
  projectId: "ecommercepanadeiro",
  storageBucket: "ecommercepanadeiro.appspot.com",
  messagingSenderId: "571296429659",
  appId: "1:571296429659:web:08cd8fdc124f155fa8f17e"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}