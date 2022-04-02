import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Gallery!</title>
            </Head>
            <h1>
                <Link href="/">
                    <a>Go Home!</a>
                </Link>
            </h1>
            <Image src="/images/chopperHat.png" alt="chopperHat" width={200} height={200} />
        </div>      
    )
}

