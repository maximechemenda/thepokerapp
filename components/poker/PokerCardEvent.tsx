// General
import React from 'react'

// Assets from Material-UI
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

// Components
import { PokerCardBase } from '.'
import { HeaderWithIcon, KeyValue, ActionButton } from '..'

interface PokerCardEventProps {
    title: string;
    date: string;
    time: string;
    location: number;
    current_players: number;
    total_players: number;
    buyin: number;
    description: string;
    firstPrize: number;
    secondPrize: number;
}

// Content included within the PokerCardBase which contains all the information about a poker event, with a button allowing the 
// user to register to it.
export const PokerCardEvent : React.FC<PokerCardEventProps> = ({
    title, 
    date,
    time,
    location,
    current_players,
    total_players,
    buyin,
    description,
    firstPrize,
    secondPrize
})  =>
    <PokerCardBase>
        {/* Title of the event, e.g. "Friendy poker tournament with friends" */}
        <p className="text-white text-xl mb-3">
            {title}
        </p>

        {/* Header of the event, containing main information, such as time, location, and amount of players */}
        <div className="grid grid-rows-4 gap-1">
            <HeaderWithIcon
                icon={<AccessTimeIcon style={{color: "grey"}}/>}
                title={`${date} at ${time}`}
            />

            <HeaderWithIcon
                icon={<LocationOnIcon style={{color: "grey"}}/>}
                title={`Within ${location} miles`}
            />

            <HeaderWithIcon
                icon={<PersonIcon style={{color: "grey"}}/>}
                title={`${current_players}/${total_players}`}
            />
        </div>

        {/* Key values fo the event, containing the buy in amount, the first prize and second prize */}
        <div className="flex justify-between">
            <KeyValue 
                title="buy in"
                value={`£${buyin}`}
            />

            <KeyValue 
                title="first prize"
                value={`£${firstPrize}`}
            />

            <KeyValue 
                title="second prize"
                value={`£${secondPrize}`}
            />
        </div>


        {/* Description of the event */}
        <div className="mt-5">
            <p className="text-white">
                {description}
            </p>
        </div>

        {/* Button allowing user to register to event */}
        <div className="flex justify-center mt-10">
            <ActionButton variant="primary">
                Register Interest
            </ActionButton>
        </div>
    </PokerCardBase>