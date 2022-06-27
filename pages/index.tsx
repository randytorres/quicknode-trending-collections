import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import { getWeb3 } from "../helpers/web3"
import { useTrendingCollections } from '../hooks/useTrendingCollections'
import { Login } from '../components/Login'
import { TrendingCollections } from '../components/TrendingCollections'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { loading, error, collections } = useTrendingCollections()
  const [web3Instance, setWeb3] = useState<Web3 | null>(null)
  const [address, setAddress] = useState('')
  
  const getWeb3Instance = async () => {
    const web3 = await getWeb3()
    if (!web3) {
      toast("No Web3 Found", {
        type: toast.TYPE.ERROR,
      })
      return
    }

    return web3
  }

  const setWeb3Instance = async () => {
    const web3 = await getWeb3Instance()
    setWeb3(web3)
  }

  const getAndSaveAccount = async () => {
    if (!web3Instance) {
      toast("No Web3 Found", {
        type: toast.TYPE.ERROR,
      })
      return
    }

    const accounts = await web3Instance.eth.getAccounts()
    
    if (accounts?.length < 0) {
      toast("No Accounts found", {
        type: toast.TYPE.ERROR,
      })
      return 
    }

    const [selectedAccount] = accounts
    setAddress(selectedAccount)
  }

  const renderPage = () => {
    if (!address) {
      return <Login setWeb3Instance={setWeb3Instance} /> 
    }

    if (loading) {
      return <CircularProgress />
    }

    if (collections?.length > 0) {
      return <TrendingCollections collections={collections} />
    }
  }

  useEffect(() => {
    if (web3Instance) {
      getAndSaveAccount()
    }
  }, [web3Instance])

  return (
    <div className={styles.container}>
      <Head>
        <title>Trending NFT Collections</title>
        <meta name="description" content="Trending NFT Collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 min-h-screen flex flex-col justify-center items-center">
        <p>{address ? "Logged In" : "Logged Out"}</p>
        {renderPage()}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
