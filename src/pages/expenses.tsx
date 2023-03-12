import Layout from '../components/Layout/Layout'
import styles from "../styles/Expenses.module.css"
import Image from 'next/image'
import InsuranceCard from '@/components/Properties/InsuranceCard'
import DataDisplay from '@/components/DataDisplay/DataDisplay'
import LedgerCard from '@/components/Ledger/LedgerCard'

interface ExpensesProps {

}


const Expenses: React.FC<ExpensesProps> = () => {



    return (
        <Layout>
        <div className={styles.wrapper}>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <div className={styles.topHeader}>
                        <h1 className={styles.h1}>Ledger</h1>
                        <button className={styles.addButton}>ADD EXPENSE</button>
                    </div>
                    <div className={styles.bottomHeader}>
                        <div className={styles.searchBar}>Search</div>
                        <div className={styles.filterButton}>Filter</div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.leftColumn}>
                        <LedgerCard/>
                        <LedgerCard/>
                        <LedgerCard/>
                        <LedgerCard/>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.incomeExpenses}>
                            <div className={styles.income}>
                                <p className={styles.amount}>$20,934.56</p>
                                <p className={styles.label}>Balance</p>
                            </div>
                            <div className={styles.income}>
                                <p className={styles.amount}>$17,934.22</p>
                                <p className={styles.label}>Income</p>
                            </div>
                            <div className={styles.expenses}>
                                <p className={styles.amount}>$6,098.89</p>
                                <p className={styles.label}>Expenses</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
    )
}

export default Expenses