import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDe1n20jAWs15mhhZwQphv7Lf_hu2Upe6M",
  authDomain: "test-free-351ca.firebaseapp.com",
  databaseURL: "https://test-free-351ca.firebaseio.com",
  projectId: "test-free-351ca",
  storageBucket: "test-free-351ca.appspot.com",
  messagingSenderId: "746164065938"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export { firebase };
