import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
const Home: NextPage = () => {
  return (
    <div className="h-screen bg-mainBg grid place-items-center">
      <Head>
        <title>WhatsApp Ui Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-[90vw] h-[90vh] bg-appBg shadow-mainShadow flex'>
         <Sidebar />
         <Chat />
      </div>
    </div>
  )
}

export default Home
