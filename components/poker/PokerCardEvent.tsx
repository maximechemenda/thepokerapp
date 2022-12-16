// General
import React from 'react'

// Assets from Material-UI
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

// Components
import { PokerCardBase } from '.'
import { HeaderWithIcon, KeyValue, ActionButton } from '..'

// Utils
import { EventType } from "../../utils"

interface PokerCardEventProps {
    event: EventType;
}

// Content included within the PokerCardBase which contains all the information about a poker event, with a button allowing the 
// user to register to it.
export const PokerCardEvent : React.FC<PokerCardEventProps> = ({
    event
})  => {
    return (
        <PokerCardBase id={event.id}>
            {/* Title of the event, e.g. "Friendy poker tournament with friends" */}
            <p className="text-white text-xl mb-3">
                {event.title}
            </p>

            {/* Header of the event, containing main information, such as time, location, and amount of players */}
            <div className="grid grid-rows-4 gap-1">
                <HeaderWithIcon
                    icon={<AccessTimeIcon style={{color: "grey"}}/>}
                    title={`${event.date} at ${event.time}`}
                />

                <HeaderWithIcon
                    icon={<LocationOnIcon style={{color: "grey"}}/>}
                    title={`Within ${event.location} miles`}
                />

                <HeaderWithIcon
                    icon={<PersonIcon style={{color: "grey"}}/>}
                    title={`${event.current_players}/${event.total_players}`}
                />
            </div>

            {/* Key values fo the event, containing the buy in amount, the first prize and second prize */}
            <div className="flex justify-between">
                <KeyValue 
                    title="buy in"
                    value={`£${event.buyin}`}
                />

                <KeyValue 
                    title="first prize"
                    value={`£${event.firstPrize}`}
                />

                <KeyValue 
                    title="second prize"
                    value={`£${event.secondPrize}`}
                />
            </div>


            {/* Description of the event */}
            <div className="mt-5">
                <p className="text-white">
                    {event.description}
                </p>
            </div>

            {/* Button allowing user to register to event */}
            <div className="flex justify-center mt-10">
                <ActionButton variant="primary">
                    Register Interest
                </ActionButton>
            </div>
        </PokerCardBase>
    )
}