// General
import React, { useContext } from 'react'
import toast from "react-hot-toast"

// Assets from Material-UI
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

// Components
import { PokerCardBase } from '.'
import { HeaderWithIcon, KeyValue, ActionButton } from '..'

// Utils
import { EventType, RetrievedUser } from "../../utils"

// Context
import { MaxpokeContext } from "../../contexts"

// Firestore
import { db } from "../../firebase/firebaseApp"
import { doc, updateDoc, getDoc } from "firebase/firestore"



interface PokerCardEventProps {
    event: EventType;
}

// Content included within the PokerCardBase which contains all the information about a poker event, with a button allowing the user to register to it.
export const PokerCardEvent : React.FC<PokerCardEventProps> = ({event})  => {

    // Current authenticated user: Useful if notifying interest: we get its info and add it to the event's interestedUsers list
    const { currentUser } = useContext(MaxpokeContext)

    // Adds the current authenticated user to the list of interested users for that event (in the event collection)
    const registerInterest = async (event_uid: string) => {
        try {
            if ((currentUser !== null) && currentUser !== undefined) {
                const eventDocRef = doc(db, "events", event_uid);
    
                // Get the event doc (to retrieve the current list of interested users)
                const docSnap = await getDoc(eventDocRef);
                console.log(docSnap.data())
    
                if (docSnap.exists()) {
                    // Extract list of interested users
                    var interestedUsers: RetrievedUser[] = docSnap.data().interestedUsers

                    // If user didn't already register interest, then we add it to the array
                    if (interestedUsers.map(user => user.uid).includes(currentUser.uid)) {
                        toast.error("Yo chill, you already registered for that!")
                    } else {
                        // Init new interested user
                        const currentInterestedUser: RetrievedUser = {
                            uid: currentUser.uid,
                            name: currentUser.displayName,
                            email: currentUser.email,
                            photoURL: currentUser.photoURL
                        }

                        // Add new interested user to existing array
                        interestedUsers.push(currentInterestedUser)
        
                        // Save to firestore
                        updateDoc(eventDocRef, {
                            interestedUsers: interestedUsers
                        })
                        .then(docRef => {
                            toast.success("The event organiser has been notified")
                        })
                        .catch(error => {
                            toast.error("Error when submitting interest. Sorry bro")
                            console.log(error);
                        })
                    }
    
                } else {
                    toast.error("Error when submitting interest. Sorry bro")
                }
            } else {
                toast.error("Please sign up to register interest")
            }
        } catch(e) {
            console.log(e)
            toast.error("Oopsie doopsie, something went wrong :(")
        }

    }

    return (
        <PokerCardBase>
            {/* Title of the event, e.g. "Friendy poker tournament with friends" */}
            <p className="text-white text-xl mb-3">
                {event.title}
            </p>

            {/* Header of the event, containing main information, such as time, location, and amount of players */}
            <div className="grid grid-rows-4 gap-1">
                <HeaderWithIcon
                    icon={<AccessTimeIcon style={{color: "grey"}}/>}
                    title={`${event.date} at ${event.time}`}
                />

                <HeaderWithIcon
                    icon={<LocationOnIcon style={{color: "grey"}}/>}
                    title={event.location}
                />

                <HeaderWithIcon
                    icon={<PersonIcon style={{color: "grey"}}/>}
                    title={`${event.current_players}/${event.total_players}`}
                    // title={`${event.interestedUsers.length}/${event.total_players}`}
                />
            </div>

            {/* Key values fo the event, containing the buy in amount, the first prize and second prize */}
            <div className="flex justify-between">
                <KeyValue 
                    title="buy in"
                    value={`£${event.buyin}`}
                />

                <KeyValue 
                    title="1st prize"
                    value={`£${event.firstPrize}`}
                />

                <KeyValue 
                    title="2nd prize"
                    value={`£${event.secondPrize}`}
                />
            </div>


            {/* Description of the event */}
            <div className="mt-5">
                <p className="text-white">
                    {event.description}
                </p>
            </div>

            {/* Button allowing user to register to event */}
            <div className="flex justify-center mt-10">
                <ActionButton onClick={() => registerInterest(event.uid)} variant="primary">
                    Register Interest
                </ActionButton>
            </div>
        </PokerCardBase>
    )
}