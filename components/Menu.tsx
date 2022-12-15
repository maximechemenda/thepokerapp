// General
import React from 'react'
import Image from 'next/image'

// Components
import { MediumHeader, MenuSection } from '.'

export const Menu : React.FC<{}> = props =>
    <div className="bg-sub_background">

        {/* Activities Section */}
        <div className="pt-10">
            <MediumHeader paddingL="pl-10" title="Activities" />

            <MenuSection active={true}>
                ♠️ Poker
            </MenuSection>
            <MenuSection active={false}>
                ⚽️ Football
            </MenuSection>
            <MenuSection active={false}>
                🎾 Tennis
            </MenuSection>
            <MenuSection active={false}>
                🏓 Table Tennis
            </MenuSection>
            <MenuSection active={false}>
                🎶 Techno
            </MenuSection>
        </div>

        {/* Actions Section */}
        <div className="mt-20">
            <MediumHeader paddingL="pl-10" title="Actions" />

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