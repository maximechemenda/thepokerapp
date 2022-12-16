// General
import React from 'react'

// Base for a poker card, it's basically the dark card with padding. 
// This base can contain a poker event card, a poker player or a poker tournament card
export const PokerCardBase : React.FC<{
    id: string;
    children: React.ReactNode
}> = props  =>
    <div key={props.id} className="bg-sub_background rounded-lg px-6 py-7">
        {props.children}
    </div>