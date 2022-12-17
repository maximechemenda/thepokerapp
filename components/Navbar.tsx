// General
import React, { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router"

// Components
import { ActionButton } from '.'

// Context
import { MaxpokeContext } from '../contexts'

// Assets
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


// if user is null (unauthenticated), display signin and signout methods, display signout and create event buttons
export const NavbarAuthSection = () => {
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
export const Navbar : React.FC<{}> = props => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MaxpokeContext)

    return (
        <div className="flex flex-row bg-sub_background justify-between px-6 lg:px-[50px] py-5 rlg:ounded-b-xl lg:mb-10">
            <Image
                src="/assets/logo.svg"
                alt="Pokemax Logo"
                height={32}
                width={120}
                title="Navigate to Home Page"
                />

            
            <div className="hidden lg:block">
                {NavbarAuthSection()}
            </div>

            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden block bg-secondary-grey p-1 rounded-lg cursor-pointer">
                {isMenuOpen ? <ClearIcon style={{color: "grey"}}/>
                : <MenuIcon style={{color: "grey"}}/>
                
            }
            </div>
        </div>
    )
}
