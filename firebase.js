import Firebase from 'firebase'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3SyupfwGf957FqGY-c1yX3Gaa7WsPSco",
  authDomain: "diariobd-e2ffc.firebaseapp.com",
  projectId: "diariobd-e2ffc",
  storageBucket: "diariobd-e2ffc.appspot.com",
  messagingSenderId: "400220678976",
  appId: "1:400220678976:web:399e28c52f322c8768e8a5"
};
if (!Firebase.apps.length){

  Firebase.initializeApp(firebaseConfig);

}

const bdstore = Firebase.firestore();
export default bdstore;