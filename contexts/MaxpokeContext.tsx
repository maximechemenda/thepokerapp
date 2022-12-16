import React, { createContext, useState, useEffect } from 'react'
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore"
import { db, auth, provider } from "../firebase/firebaseApp"
import { EventType, RetrievedUser } from "../utils"
import { signInWithPopup, User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import toast from 'react-hot-toast';

interface IMaxpokeContext {
    users: RetrievedUser[];
    events: EventType[];
    currentUser: User | null | undefined
    handleUserAuth: () => Promise<any>;
    handleUserSignOut: () => Promise<any>;
}

export const MaxpokeContext = createContext<IMaxpokeContext>({} as IMaxpokeContext);

export const MaxpokeProvider: React.FC<{children: React.ReactNode}> = props => {
    // List of users from the Firebase database
    const [users, setUsers] = useState<RetrievedUser[]>([])

    // List of events from the Firebase database
    const [events, setEvents] = useState<EventType[]>([])

    // Current user who is signed in (or not)
    const [currentUser, loading] = useAuthState(auth)

    // Adds user to Firebase database in the collection "users" if it hasn't been added already (i.e. if it's the first time user signs in)
    const addUserToFirebase = async (user: User) => {
        try {
            const test_user = await getDoc(doc(db, "users", user.uid));

            if (!test_user.data()) {
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL
                })
            }
        } catch(e) {
            console.log(e)
        }
    }

    // Opens sign in pop up window to sign in or sign up with Google
    const handleUserAuth = async () => { 
        try {
            const result = await signInWithPopup(auth, provider);
            await addUserToFirebase(result.user);

            toast.success("Successfully signed in!")
        } catch(e) {
            toast.error("Error when signing in :(")
            console.log(e)
        }
    }

    // Signs out
    const handleUserSignOut = async () => {
        try {
            await auth.signOut();
            toast.success("Adios amigos")
        } catch(e) {
            toast.error("Error when signing out :(")
            console.log(e)
        }
    }

    // Gets the users from Firebase and sets the state accordingly
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))

            const retrieved_users = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id, 
                    email: doc.data().email,
                    photoURL: doc.data().photoURL
                }
            })
            setUsers(retrieved_users)
        }

        getUsers();
    }, [])

    // Gets the events from Firebase and sets the state accordingly
    useEffect(() => {
        const getEvents = async () => {
            const querySnapshot = await getDocs(collection(db, 'events'))

            const retrieved_events = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    date: doc.data().date,
                    time: doc.data().time,
                    location: doc.data().location,
                    current_players: doc.data().current_players,
                    total_players: doc.data().total_players,
                    buyin: doc.data().buyin,
                    description: doc.data().description,
                    firstPrize: doc.data().firstPrize,
                    secondPrize: doc.data().secondPrize,
                }
            })
            setEvents(retrieved_events)
        }

        getEvents();
    }, [])

    return (
        <MaxpokeContext.Provider value={{ users, events, handleUserAuth, handleUserSignOut, currentUser}}>
            {props.children}
        </MaxpokeContext.Provider>
    )
}