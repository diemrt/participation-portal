import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseSdk } from '../data/firebaseOptions';

const firebaseConfig = firebaseSdk;

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export function firebaseSignIn(email, password, setResult, setError) 
{
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setResult(userCredential.user);
        })
        .catch((error) => {
            setError(error.message);
        })

}

