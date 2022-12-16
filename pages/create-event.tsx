// General
import Head from 'next/head'
import React, {useState} from "react"

// Components
import { Navbar, ActionButton, FormBase, FormInput } from "../components"

// Utils
import { EventType } from "../utils"

export default function Home() {
    const initialEvent = {
        id: undefined,
        title: undefined,
        date: undefined,
        time: undefined,
        location: undefined,
        current_players: undefined,
        total_players: undefined,
        buyin: undefined,
        description: undefined,
        firstPrize: undefined,
        secondPrize: undefined
    }

    const [event, setEvent] = useState<EventType>(initialEvent)

  return (
      <div>
        <Head>
            <title>Create a poker event</title>
            <meta name="description" content="Create an event and let players join you!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Navbar />

        <div className="grid grid-cols-9 mt-[80px]">
            <div className="col-start-4 col-span-3">
                <FormBase>
                    <p className="text-white font-bold text-2xl mb-10">
                        create a poker event
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                        <FormInput 
                            title="Event title"
                            value={event.title}
                            handleChange={(e) => setEvent({
                                title: e.target.value,
                                ...event
                            })}
                            placeholder="Chill poker night with friends"
                            type="text"
                        />

                        <FormInput 
                            title="Event location"
                            value={event.location}
                            handleChange={(e) => setEvent({
                                location: e.target.value,
                                ...event
                            })}
                            placeholder="Newington"
                            type="text"
                        />

                        <div className="grid grid-cols-2 gap-5">
                            <FormInput 
                                title="Date"
                                value={event.date}
                                handleChange={(e) => setEvent({
                                    date: e.target.value,
                                    ...event
                                })}
                                placeholder="Dec 4th"
                                type="text"
                            />

                            <FormInput 
                                title="Time"
                                value={event.time}
                                handleChange={(e) => setEvent({
                                    time: e.target.value,
                                    ...event
                                })}
                                placeholder="10pm"
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <FormInput 
                                title="Current no. of players"
                                value={event.current_players}
                                handleChange={(e) => setEvent({
                                    current_players: e.target.value,
                                    ...event
                                })}
                                placeholder="3"
                                type="number"
                            />

                            <FormInput 
                                title="Max. no. of players"
                                value={event.total_players}
                                handleChange={(e) => setEvent({
                                    total_players: e.target.value,
                                    ...event
                                })}
                                placeholder="6"
                                type="number"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <FormInput 
                                title="Buy in (in £)"
                                value={event.buyin}
                                handleChange={(e) => setEvent({
                                    buyin: e.target.value,
                                    ...event
                                })}
                                placeholder="10"
                                type="number"
                            />

                            <FormInput 
                                title="First prize (in £)"
                                value={event.firstPrize}
                                handleChange={(e) => setEvent({
                                    firstPrize: e.target.value,
                                    ...event
                                })}
                                placeholder="15"
                                type="number"
                            />
                        </div>

                        <FormInput 
                            title="Second prize (in £)"
                            value={event.secondPrize}
                            handleChange={(e) => setEvent({
                                secondPrize: e.target.value,
                                ...event
                            })}
                            placeholder="10"
                            type="number"
                        />
                    </div>

                    <div className="flex justify-center mt-10">
                        <ActionButton variant="primary">
                            Create project
                        </ActionButton>
                    </div>
                    

                </FormBase>
            </div>
        </div>

        
      </div>
  )
}
