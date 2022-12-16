// General
import React, { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router"

// Components
import { ActionButton } from '.'

// Context
import { MaxpokeContext } from '../contexts'


// if user is null (unauthenticated), display signin and signout methods, display signout and create event buttons
const NavbarAuthSection = () => {
    const {handleUserAuth, handleUserSignOut, currentUser} = useContext(MaxpokeContext)
    const router = useRouter()

    const handleCreateEvent = () => {
        router.push("/create-event")
    }

    if (!currentUser) {
        return (
            <div className="flex flex-row items-center">
                <ActionButton variant="secondary" className="mr-5" onClick={handleUserAuth}>
                    Sign in
                </ActionButton>

                {/* <Toaster /> */}

                <ActionButton variant="primary" className="mr-5" onClick={handleUserAuth}>
                    Sign up
                </ActionButton>
            </div>
        )
    } else {
        return (
            <div className="flex flex-row items-center">
                <ActionButton variant="primary" className="mr-5" onClick={handleCreateEvent}>
                    Create event
                </ActionButton>

                <ActionButton variant="secondary" className="mr-5" onClick={handleUserSignOut}>
                    Sign out
                </ActionButton>
            </div>
        )
    }
}

// Navbar component, which varies based on the authentication state (signed in, or not signed in)
export const Navbar : React.FC<{}> = props =>
    <div className="bg-sub_background flex flex-row justify-between px-[150px] py-10">
        <Image
            src="/assets/logo.svg"
            alt="Pokemax Logo"
            height={32}
            width={120}
            title="Navigate to Home Page"
            />    

        {NavbarAuthSection()}
    </div>