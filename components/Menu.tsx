// General
import React from 'react'
import { useRouter } from "next/router"
// Components
import { MediumHeader, MenuSection, NavbarAuthSection } from '.'

// Menu on the left of the platform, where the user can select the activites and actions
export const Menu : React.FC<{}> = props =>{
    const router = useRouter()

    return (
        <div className="bg-sub_background h-[100vh] lg:h-full rounded-r-xl pb-10">

            {/* Activities Section */}
            <div className="pt-5 lg:pt-10">
                <MediumHeader paddingL="pl-10" title="Activities" />

                <div className="mt-3">
                    <MenuSection className="cursor-pointer" 
                    active={true}
                    title="Poker"
                    />

                    <MenuSection className="opacity-20 cursor-not-allowed" 
                    active={false}
                    title="Football"
                    />

                    <MenuSection className="opacity-20 cursor-not-allowed"
                    active={false}
                    title="Tennis"
                    />

                    <MenuSection className="opacity-20 cursor-not-allowed"
                    active={false}
                    title="Table Tennis"
                    />

                    <MenuSection className="opacity-20 cursor-not-allowed"
                    active={false}
                    title="Techno"
                    />

                </div>
            </div>

            {/* Actions Section */}
            <div className="mt-5 lg:mt-10">
                <MediumHeader paddingL="pl-10" title="Actions" />

                <div className="mt-3">
                    {/* TODO(MC): Add these paths in a constant.js file in /utils */}
                    <MenuSection className="cursor-pointer"
                    onClick={() => router.push("/")} 
                    active={router.pathname === "/"}
                    title="Explore Events"
                    />

                    <MenuSection className="cursor-pointer"
                    onClick={() => router.push("/create-event")} 
                    active={router.pathname === "/create-event"}
                    title="Create Event"
                    />

                    <MenuSection className="opacity-20 cursor-not-allowed"
                    active={false}
                    title="Past Events"
                    />
                </div>
            </div>

            {/* Auth nav bar buttons. Shown only if small screen size, otherwise it's hidden and 
            the component is in the Navbar component (when on Desktop). 
            
            TODO(MC) improve code structure for this. it's bad now because we have some navbar stuff in the Menu based on the screen size => not consistent */}
            <div className="flex lg:hidden mt-5 lg:mt-10 justify-center">
                <NavbarAuthSection />
            </div>
        </div>
    )
}
