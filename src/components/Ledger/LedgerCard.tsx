
import styles from '../../styles/LedgerCard.module.css'


export default function LedgerCard() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <p className={styles.date}>Posted Date: 12-12-2023</p>
                <p className={styles.user}>by Kathy Park</p>
            </div>
            <div className={styles.middleContainer}>
                <p className={styles.address}>3245 Kentfield Rd.</p>
                <p className={styles.amount}>+$1,023</p>
            </div>
            <div className={styles.bottomContainer}>
                <p className={styles.type}>Landscaping</p>
            </div>
        </div>
    )
}