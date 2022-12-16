// General
import React from 'react'

// Components
import { MediumHeader, MenuSection } from '.'

// Menu on the left of the platform, where the user can select the activites and actions
export const Menu : React.FC<{}> = props =>
    <div className="bg-sub_background">

        {/* Activities Section */}
        <div className="pt-10">
            <MediumHeader paddingL="pl-10" title="Activities" />

            <div className="mt-3">
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
                <MenuSection active={true}>
                    🙋‍♂️ Explore poker events
                </MenuSection>
                <MenuSection active={false}>
                    👨‍👩‍👦‍👦 Create a project
                </MenuSection>
                <MenuSection active={false} className="opacity-50 cursor-not-allowed">
                    🔁 View past events (coming soon...)
                </MenuSection>
            </div>
        </div>
    </div>