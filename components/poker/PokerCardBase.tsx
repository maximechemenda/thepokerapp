// General
import React from 'react'

// Base for a poker card, it's basically the dark card with padding. 
// This base can contain a poker event card, a poker player or a poker tournament card
export const PokerCardBase : React.FC<{
    children: React.ReactNode
}> = props  =>
    <div className="bg-sub_background rounded-lg px-6 py-7 border-[1px] border-action_strong">
        {props.children}
    </div>