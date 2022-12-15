import Head from 'next/head'
import { Navbar, Menu, PageHeader, PokerCardEvent } from "../components"

export default function Home() {
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
                <PageHeader title="poker tournaments looking for you"/>

                {/* TODO(MC): Currently ths is just a template, but later it will need to get the items from the database. For now
                we can just manually write the poker events here */}
                <div className="grid grid-cols-2 gap-20">
                    <PokerCardEvent
                        title="Friendly poker with beers and cigars"
                        date="Dec 12th"
                        time = "10pm"
                        location={5} //miles
                        current_players={3}
                        total_players={6}
                        buyin={10} //£
                        description="We’re quite chill, we don’t really mind any  rules for
                        rebuys, we’re happy to meet new people and get
                        some money from you!"
                        firstPrize={10} //£
                        secondPrize={5} //£
                    />

                    <PokerCardEvent
                        title="Friendly poker with beers and cigars"
                        date="Dec 12th"
                        time = "10pm"
                        location={5} //miles
                        current_players={3}
                        total_players={6}
                        buyin={110} //£
                        description="We’re quite chill, we don’t really mind any  rules for
                        rebuys, we’re happy to meet new people and get
                        some money from you!"
                        firstPrize={110} //£
                        secondPrize={115} //£
                    />
                </div>
            </div>
        </div>
      </div>
  )
}
