import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDwbrcvtI7HXtnKPwXfgNyKAFCZu3uGcr8',
    authDomain: 'stories-made-simple.firebaseapp.com',
    projectId: 'stories-made-simple',
    storageBucket: 'stories-made-simple.appspot.com',
    messagingSenderId: '199555824984',
    appId: '1:199555824984:web:c1f8e0a4511ad03e8a392d',
    measurementId: 'G-NQ1LFE21KH',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth() //authentication object
const provider = new firebase.auth.GoogleAuthProvider() //using google authentication

export { auth, provider }
export default db
