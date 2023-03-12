import styles from "../../styles/TaxInsuranceDataDisplay.module.css"
import { useState } from "react"
import DataPoint from "./DataPoint"


export default function TaxInsuranceDataDisplay() {
    
   
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.selectorContainer}>
                    <p>Property Taxes</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Umbrella Policy</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Fire Insurance</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Comments</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
               

                <div>THIS IS TAX and Insurance</div>

            </div>
            <div className={styles.farRightContainer}>
                <button>Add</button>
                <button>Save</button>
            </div>
        </div>
    )
}