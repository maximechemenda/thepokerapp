// General
import React from 'react'
import { useRouter } from "next/router"
// Components
import { MediumHeader, MenuSection } from '.'

// Menu on the left of the platform, where the user can select the activites and actions
export const Menu : React.FC<{}> = props =>{
    const router = useRouter()

    const goToCreateProjectPage = () => {
        router.push("/create-event")
    }

    return (

        <div className="bg-sub_background h-full">

            {/* Activities Section */}
            <div className="pt-10">
                <MediumHeader paddingL="pl-10" title="Activities" />

                <div className="mt-3">
                    {/* <MenuSection active={true}> */}
                    <MenuSection active={true}>
                        ♠️ Poker
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        ⚽️ Football (coming soon...)
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        🎾 Tennis (coming soon...)
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        🏓 Table Tennis (coming soon...)
                    </MenuSection>
                    <MenuSection className="opacity-50 cursor-not-allowed" active={false}>
                        🎶 Techno (coming soon...)
                    </MenuSection>
                </div>
            </div>

            {/* Actions Section */}
            <div className="mt-20">
                <MediumHeader paddingL="pl-10" title="Actions" />

                <div className="mt-3">
                    <MenuSection onClick={() => router.push("/")} active={router.pathname === "/"}> {/* TODO(MC): Add these paths in a constant.js file in /utils */}
                        🙋‍♂️ Explore events
                    </MenuSection>
                    <MenuSection onClick={() => router.push("/create-event")} active={router.pathname === "/create-event"}>
                        👨‍👩‍👦‍👦 Create event
                    </MenuSection>
                    <MenuSection active={false} className="opacity-50 cursor-not-allowed">
                        🔁 View past events (coming soon...)
                    </MenuSection>
                </div>
            </div>
        </div>
    )
}
