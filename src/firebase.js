import firebase from "firebase/app";
import "firebase/firestore";

// Add Firebase credentials
const config = {};

firebase.initializeApp(config);
const db = firebase.firestore();

export const dbCakesRef = db.collection("cakes");
