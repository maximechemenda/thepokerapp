// General
import Head from 'next/head'

// Components
import { Navbar, Menu, PageHeader, PokerCardEvent } from "../components"

import { MaxpokeContext } from "../contexts"
import { useContext } from "react";

export default function Home() {
    const { events, currentUser } = useContext(MaxpokeContext)

  return (
      <div>
        <Head>
            <title>The Poker App</title>
            <meta name="description" content="The place where you find poker players" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
        
        <Navbar />

        <div className="grid grid-cols-6">
            <div className="col-span-1">
                <Menu />
            </div>

            {/* Poker tournaments looking for you */}
            <div className="col-span-5 px-20 pt-10">
                {/* The variable inside the title is just a joke, it just says "the great {firstName}" */}
                <PageHeader title={`poker tournaments looking for ${currentUser !== null ? 'the great' : ''} ${(currentUser?.displayName)?.split(" ")[0] ?? 'you'} `}/>

                {/* TODO(MC): Have a separate page/section component to display these poker tournaments */}
                <div className="grid grid-cols-2 gap-20">
                    {events.map(event => (
                        <PokerCardEvent event={event}/>
                    ))}
                </div>
            </div>
        </div>
      </div>
  )
}
