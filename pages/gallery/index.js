import Image from 'next/image'
import styles from '../../styles/Home.module.css'


export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Welcome to the Gallery!
            </h1>
            <Image src="/images/chopperHat.png" alt="chopperHat" width={200} height={200} />
        </div>      
    )
}

