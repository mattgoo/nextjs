import Link from 'next/link'

//import styles, has .container, .Info, .Gallery, .Projects
import styles from '../../styles/myStyles.module.css'

export default function Home() {
    return (
        // three equal size divs separated by a black vertical line 
        <div className={styles.container}>
            <div className={styles.Info} >
                <h1>
                    Info!
                </h1>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.Gallery}>
                <h1>
                    Gallery!
                </h1>
            </div>
            <div className={styles.Projects}>
                <h1>
                    Projects!
                </h1>
            </div>
        </div>
    )
}

