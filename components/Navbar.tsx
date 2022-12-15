// General
import React from 'react'
import Image from 'next/image'
import {User} from "firebase/auth"

// Components
import { ActionButton, ActionLink } from '.'

// API
import {AuthenticateUser, SignOutUser} from "../pages/api/auth"

// if user is null (unauthenticated), display signin and signout methods, display signout and create event buttons
const NavbarAuthSection = (user: User | null | undefined) => {
    if (!user) {
        return (
            <div className="flex flex-row items-center">
                <ActionButton variant="secondary" className="mr-5" onClick={AuthenticateUser}>
                    Sign in
                </ActionButton>

                <ActionButton variant="primary" className="mr-5" onClick={AuthenticateUser}>
                    Sign up
                </ActionButton>
            </div>
        )
    } else {
        return (
            <div className="flex flex-row items-center">
                <ActionButton variant="primary" className="mr-5">
                    Create event
                </ActionButton>

                <ActionButton variant="secondary" className="mr-5" onClick={SignOutUser}>
                    Sign out
                </ActionButton>
            </div>
        )
    }
}

// Navbar component, which varies based on the authentication state (signed in, or not signed in)
export const Navbar : React.FC<{user: User | null | undefined}> = props =>
    <div className="bg-sub_background flex flex-row justify-between px-[150px] py-10">
        <Image
            src="/assets/logo.svg"
            alt="Pokemax Logo"
            height={32}
            width={120}
            title="Navigate to Home Page"
            />    

        {NavbarAuthSection(props.user)}
    </div>