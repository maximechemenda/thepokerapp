import React, { createContext, useState, useEffect } from 'react'
import { collection, getDocs, setDoc, doc } from "firebase/firestore"
import { db, auth, provider } from "../firebase/firebaseApp"
import { EventType } from "../utils"
import { signInWithPopup, User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"

type RetrievedUser = {
    id: string;
    data: any //TODO(MC): Make the type explicit once I added the items in the database
}

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

    // Opens sign in pop up window to sign in or sign up with Google
    const handleUserAuth = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch(e) {
            console.log(e)
        }
    }

    // Signs out
    const handleUserSignOut = async () => {
        try {
            await auth.signOut();
        } catch(e) {
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
                    data: {
                        ...doc.data()
                    }
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