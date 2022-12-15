// General
import React from 'react'
import Image from 'next/image'

// Components
import { ActionButton, ActionLink } from '.'

export const Navbar : React.FC<{}> = props =>
    <div className="bg-sub_background flex flex-row justify-between px-[150px] py-10">
        <Image
            src="/assets/logo.svg"
            alt="Pokemax Logo"
            height={32}
            width={120}
            title="Navigate to Home Page"
            />    

        <div className="flex flex-row items-center">
            <ActionButton className="mr-5">
                Create event
            </ActionButton>

            <ActionLink>
                Sign out
            </ActionLink>
        </div>
        
    </div>