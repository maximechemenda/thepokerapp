// Firebase authentication imports
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import function to init firebase
import { initFirebase } from "../../firebase/firebaseApp"

// Function that authenticates the user (sign-in or sign-up) using Google provider
export function AuthenticateUser() {
    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signIn = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch(e) {
            console.log(e)
        }
    }
    signIn();
}

// Function that signs out the user
export function SignOutUser() {
    initFirebase();
    const auth = getAuth();

    const signOut = async () => {
        try {
            await auth.signOut();
        } catch(e) {
            console.log(e)
        }
    }
    signOut();
}
