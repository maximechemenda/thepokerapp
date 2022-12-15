import Head from 'next/head'
import { Navbar } from "../components"

export default function Home() {
  return (
      <div>
        <Head>
            <title>The Poker App</title>
            <meta name="description" content="The place where you find poker players" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
        <Navbar />
      </div>
  )
}
