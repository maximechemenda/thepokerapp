// General
import React from 'react'
import { useRouter } from "next/router"
// Components
import { MediumHeader, MenuSection, NavbarAuthSection } from '.'

// Menu on the left of the platform, where the user can select the activites and actions
export const Menu : React.FC<{}> = props =>{
    const router = useRouter()

    return (
        <div className="bg-sub_background h-full rounded-r-xl pb-10">

            {/* Activities Section */}
            <div className="pt-10">
                <MediumHeader paddingL="pl-10" title="Activities" />

                <div className="mt-3">
                    {/* <MenuSection active={true}> */}
                    <MenuSection className="cursor-pointer" active={true}>
                        ♠️ Poker
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        ⚽️ Football
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        🎾 Tennis
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        🏓 Table Tennis
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        🎶 Techno
                    </MenuSection>
                </div>
            </div>

            {/* Actions Section */}
            <div className="mt-10">
                <MediumHeader paddingL="pl-10" title="Actions" />

                <div className="mt-3">
                    <MenuSection className="cursor-pointer" onClick={() => router.push("/")} active={router.pathname === "/"}> {/* TODO(MC): Add these paths in a constant.js file in /utils */}
                        🙋‍♂️ Explore events
                    </MenuSection>
                    <MenuSection className="cursor-pointer" onClick={() => router.push("/create-event")} active={router.pathname === "/create-event"}>
                        👨‍👩‍👦‍👦 Create event
                    </MenuSection>
                    <MenuSection active={false} className="opacity-50 cursor-not-allowed">
                        🔁 Past events
                    </MenuSection>
                </div>
            </div>

            {/* Auth nav bar buttons. Shown only if small screen size, otherwise it's hidden and 
            the component is in the Navbar component (when on Desktop). 
            
            TODO(MC) improve code structure for this. it's bad now because we have some navbar stuff in the Menu based on the screen size => not consistent */}
            <div className="flex lg:hidden mt-10 justify-center">
                <NavbarAuthSection />
            </div>
        </div>
    )
}
