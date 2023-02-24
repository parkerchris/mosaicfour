import Layout from '../components/Layout/Layout'
import styles from "../styles/Expenses.module.css"
import Image from 'next/image'
import InsuranceCard from '@/components/Properties/InsuranceCard'

export default function Expenses() {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.header}>
                    <div className={styles.headerContainer}>
                    <div>
                        <h1 className={styles.logo}>LOGO</h1>
                    </div>
                    <div className={styles.authenticationContainer}>
                        <p>Log in</p>
                        <button>Get Started</button>
                    </div>
                    </div>
                </div>
                <div className={styles.mainContent}>
                    <h1>Your online property portal</h1>
                    <h3>Easily stay up to date on performance, maintenance, expenses<br></br> and income. Whether as a solo owner or with partners.</h3>
                    {/* <h3>Mangaement platform for scaling property investors. Track performance, maintenance, expenses, and income.</h3> */}
                    <button>$$$ Get Started</button>
                    <p>*No credit card required</p>
                    <div className={styles.ImageContainer}>
{/*                         <Image
                            src='/../../public/f4a5be82b777676929c8a77df1d0a715.png'
                            alt=''
                            width={700}
                            height={400}
                        ></Image> */}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}></div>
            <div className={styles.contentOne}>
                <div className={styles.contentOneTop}>
                        <InsuranceCard/>
                </div>
            </div>
        </div>
    )
}