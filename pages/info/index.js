import Link from 'next/link'
import styles from '../../styles/myStyles.css'


export default function Home() {
    return (
        // three equal size divs separated by a black vertical line
        <div className={styles.container}>
            <div className={styles.Info}></div>
            <div className={styles.Gallery}></div>
            <div className={styles.Projects}></div>
        </div>
    )
}

