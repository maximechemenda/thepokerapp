import { getFirestore } from "firebase/firestore";

// Import function to init firebase
import { initFirestore } from "../../firebase/firebaseApp"

import { collection, addDoc } from "firebase/firestore"; 

export function testFireBase() {
    initFirestore();
    const db = getFirestore();
    // TODO(MC): Currently, if going into Cloud Firestore > Rules, a temporary fix has been made by using "allow read, write: if true";
    // This is temporary, and EXTREMELY unsecure - change this when I can

    const doit = async () => {
            try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
    }
    doit();
}