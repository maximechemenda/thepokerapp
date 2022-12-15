import Head from 'next/head'
import { Navbar, Menu } from "../components"

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

            <div className="col-span-5 bg-white flex">
                you

            </div>
        </div>
      </div>
  )
}
