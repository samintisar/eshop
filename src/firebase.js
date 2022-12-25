import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCwjNHY3hq2sLTJGdeLyjxwi1crGw9WIBg",
    authDomain: "eshop-e6545.firebaseapp.com",
    projectId: "eshop-e6545",
    storageBucket: "eshop-e6545.appspot.com",
    messagingSenderId: "678487105131",
    appId: "1:678487105131:web:6320ed3432e65ff878db2e",
    measurementId: "G-3ZYNSKRBTV"
  }

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth }