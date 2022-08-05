// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdHsT4CWHPJRvGQVvrQSoKVzZ7YR7qnIA",
  authDomain: "boring-wear-db.firebaseapp.com",
  projectId: "boring-wear-db",
  storageBucket: "boring-wear-db.appspot.com",
  messagingSenderId: "863225559452",
  appId: "1:863225559452:web:e6598fa359475f029bb059"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const SingInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const SignInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const CreateUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    
    // if user data does not exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }


    // If user data exists
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}