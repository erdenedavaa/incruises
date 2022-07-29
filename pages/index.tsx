import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Incruises Mongolia' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Incruises Mongolia</h1>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src='https://res.cloudinary.com/duhimfgy0/image/upload/v1637913455/small_event4_e057e57ab0.jpg'
              alt='Cloudinary image'
              width={272}
              // height={216}
            />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
