import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZ8WbEQYpMD1Fwtr1O_n2JVG12KJPdtjg",
  authDomain: "camilaart-form.firebaseapp.com",
  projectId: "camilaart-form",
  storageBucket: "camilaart-form.appspot.com",
  messagingSenderId: "735948082755",
  appId: "1:735948082755:web:7147bab64fc580bcf80ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(app)

export { db, addDoc, collection }