import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
        <Head>
            <title>The Poker App</title>
            <meta name="description" content="The place where you find poker players" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
        <div className="bg-white">
            <p>test</p>
        </div>
      </div>
  )
}
