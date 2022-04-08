import Link from 'next/link'

//import styles, has .container, .Info, .Gallery, .Projects
import styles from '../../styles/myStyles.module.css'

export default function Home() {
    return (
        // three equal size divs separated by a black vertical line 
        <div className={styles.container}>
            <div className={styles.Info} />
            <div className={styles.Gallery} />
            <div className={styles.Projects} />
        </div>
    )
}

