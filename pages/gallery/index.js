import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Head from 'next/head' //Changes the tab title
import Link from 'next/link' //Link to another page
import Script from 'next/script' //Allows you to add scripts to the page
import Layout from '../../components/layout'


export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Gallery!</title>
            </Head>

            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log('Facebook SDK loaded')
                }
            />



            <h1>
                <Link href="/">
                    <a>Go Home!</a>
                </Link>
            </h1>





            <Image src="/images/chopperHat.png" alt="chopperHat" width={200} height={200} />
        </Layout>      
    )
}



