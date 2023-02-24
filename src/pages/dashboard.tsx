import Layout from '../components/Layout/Layout'
import styles from "../styles/Dashboard.module.css"


export default function Dashboard() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>Hello, Chris</h1>
                    </div>
                    <div className={styles.main}>
                        <div>
                            <h3>$32,000</h3>
                            <p>Since January 1st</p>
                            <p>Appreciation + Principal Paydown + Cash Flow</p>
                        </div>
                        <div className={styles.metricContainersContainer}>
                            <div className={styles.metricContainer}>
                                <p className={styles.metricAmount}><span className={styles.dollar}>$</span>1,200,000</p>
                                <p className={styles.metricName}>Asset Value</p>
                                <p>$1,200,000</p>
                            </div>
                            <div className={styles.metricContainer}>
                                <p>$1,200,000</p>
                                <p>Equity</p>
                                <p>$1,200,000</p>
                            </div>
                            <div className={styles.metricContainer}>
                                <p>$1,200,000</p>
                                <p>Debt</p>
                                <p>$1,200,000</p>
                            </div>
                        </div>
                        <div className={styles.metricContainersContainer}>
                            <div className={styles.metricContainer}>
                                <p>$1,200,000</p>
                                <p>Rent</p>
                                <p>$1,200,000</p>
                            </div>
                            <div className={styles.metricContainer}>
                                <p>$1,200,000</p>
                                <p>Expenses</p>
                                <p>$1,200,000</p>
                            </div>
                            <div className={styles.metricContainer}>
                                <p>$1,200,000</p>
                                <p>Cash flow</p>
                                <p>$1,200,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </Layout>
    )
}