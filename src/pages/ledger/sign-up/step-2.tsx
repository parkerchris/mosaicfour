
import styles from "../../../styles/Ledger.module.css"
import { useState } from "react"

export default function StepTwo() {
    
    const [ entityInfo, setEntityInfo ] = useState({
        firstName: "",
        lastName: "",
        ssn: "",
        dob: "",
        email: "",
        addressStreet: "",
        addressCity: "",
        addressState: "",
        addressPostalCode: "",
        addressCountryCode: ""
    })
    
    return (
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                <h3 className={styles.h3}>Step 2 of 2</h3>
                <div className={styles.shortDesc}>Create an account <span className={styles.span}>what's an account?</span></div>
                <div className={styles.selectorContainer}>
                   
                </div>
                <div className={styles.container}>

                    <form>
                        <select className={styles.select}>
                            <option value="">Select an entity</option>
                        </select>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>Account Nickname</label>
                            <input 
                                className={styles.input}
                                type="text"
                                placeholder="enter a first name"
                                required
                                name="firstName"
                                    ></input>
                        </div>
                    </form>

                    

                </div>

                <button className={styles.submitButton}>Create Account</button>
                <div className={styles.movingOnContainer}>
                </div>
            </div>
        </div>
    )
}