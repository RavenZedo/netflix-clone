// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGNdLmbK840mF1-7xpdaLwvbVjvCTHpNc",
  authDomain: "netflix-clone-c1154.firebaseapp.com",
  projectId: "netflix-clone-c1154",
  storageBucket: "netflix-clone-c1154.firebasestorage.app",
  messagingSenderId: "138749738982",
  appId: "1:138749738982:web:89ec87efb0ff622fb56027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async(name, email, password)=>{
 try {
    const res =   await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    }) 
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
 }
}

const logIn = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" "));
 }
    }
const logOut = ()=>{
     signOut(auth);
}
export{auth, db, logIn, logOut, signUp};