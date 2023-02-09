
import styles from "../../styles/PropertyCard.module.css"

export default function PropertyCard() {
    return (
                <div className={styles.mainContainer}>
                    <div className={styles.detailsContainer}>
                        <div className={styles.firstDetailRow}>
                            <h3 className={styles.address}>1109 Crest Rd.</h3>
                            <p>$2,200/M</p>
                        </div>
                        <div className={styles.secondDetailRow}>
                            <p>San Diego, CA.</p>
                            <div className={styles.statusContainer}>
                                <div className={styles.statusIcon}></div>
                                <div>
                                    <p className={styles.status}>OCCUPIED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    )
}