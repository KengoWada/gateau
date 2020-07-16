import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Add Firebase credentials
const config = {};

firebase.initializeApp(config);
const db = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const dbCakesRef = db.collection("cakes");
export const dbOrdersRef = db.collection("orders");
