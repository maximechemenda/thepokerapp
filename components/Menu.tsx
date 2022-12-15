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
                <MenuSection active={false}>
                    ⚽️ Football (coming soon...)
                </MenuSection>
                <MenuSection active={false}>
                    🎾 Tennis (coming soon...)
                </MenuSection>
                <MenuSection active={false}>
                    🏓 Table Tennis (coming soon...)
                </MenuSection>
                <MenuSection active={false}>
                    🎶 Techno (coming soon...)
                </MenuSection>
            </div>
        </div>

        {/* Actions Section */}
        <div className="mt-20">
            <MediumHeader paddingL="pl-10" title="Actions" />

            <div className="mt-3">
                <MenuSection active={true}>
                    🙋‍♂️ Join an event
                </MenuSection>
                <MenuSection active={false}>
                    👨‍👩‍👦‍👦 Fill your group
                </MenuSection>
                <MenuSection active={false}>
                    🔁 View past events
                </MenuSection>
            </div>
        </div>
    </div>