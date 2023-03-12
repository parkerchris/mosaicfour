

import styles from "../../styles/MaintenanceDataDisplay.module.css"
import { useState } from "react"
import DataPoint from "./DataPoint"


export default function MaintenanceDataDisplay() {
    
   
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.selectorContainer}>
                    <p>Open Requests</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Closed Requests</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Capital Expendetures</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Comments</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
               

                <div>THIS IS MAINTENANCE</div>

            </div>
            <div className={styles.farRightContainer}>
                <button>Add</button>
                <button>Save</button>
            </div>
        </div>
    )
}