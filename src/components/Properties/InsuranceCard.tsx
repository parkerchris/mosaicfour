
import styles from "../../styles/InsuranceCard.module.css"
import Link from "next/link";

export default function InsuranceCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.topContainer}>
                <div>
                    <p className={styles.policyCompany}>Farmer's Insurance</p>
                    <p className={styles.policyType}>Fire Insurance</p>
                    <p className={styles.policyNumber}>#98345ds897</p>
                </div>
                <div className={styles.policyAmountContainer}>
                    <p className={styles.policyAmount}>$1,000,000</p>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div>
                    <p className={styles.policyCompany}>Current</p>
                    <p className={styles.policyType}>Next Payment</p>
                    <p className={styles.policyNumber}>12-12-2023</p>
                </div>
                <div className={styles.policyAmountContainer}>
                    <p className={styles.policyAmount}>$643</p>
                </div>
            </div>
        </div>
    )
}