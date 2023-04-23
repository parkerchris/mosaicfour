import styles from "../../../styles/Ledger.module.css"
import { useState } from "react"
import { HiOutlineArrowLongRight } from "react-icons/hi2"
import { SiGooglemybusiness } from "react-icons/si"
import { IoPersonSharp } from "react-icons/io5"


export default function StepOne() {
    
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
                <h3 className={styles.h3}>Step 1 of 2</h3>
                <div className={styles.shortDesc}>Create an enitity <span className={styles.span}>what's an entity?</span></div>
                <div className={styles.selectorContainer}>
                    <div className={styles.selector}>
                        <IoPersonSharp/>
                        <div className={styles.selectorText}>Personal</div>
                    </div>
                    <div className={styles.selector}>
                        <SiGooglemybusiness/>
                        <div className={styles.selectorText}>Business</div>
                    </div>
                </div>
                <div className={styles.container}>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>First Name</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="enter a first name"
                            required
                            name="firstName"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Last Name</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="enter a last name"
                            required
                            name="lastName"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Social Security Number</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. 435-23-8734"
                            required
                            name="ssn"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Date of Birth</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. 10-12-1972"
                            required
                            name="dob"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Email</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. johnny@gmail.com"
                            required
                            name="email"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Street Address</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. 4567 Lakeview Rd."
                            required
                            name="addressStreet"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>City</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. San Francisco"
                            required
                            name="addressCity"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>State</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. CA"
                            required
                            name="addressState"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Postal Code</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. 98374"
                            required
                            name="addressPostalCode"
                                ></input>
                    </div>

                    <div className={styles.labelInput}>
                        <label className={styles.label}>Country Code</label>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="ex. 4567 Lakeview Rd."
                            required
                            name="addressCountryCode"
                                ></input>
                    </div>

                    

                </div>

                <button className={styles.submitButton}>Submit</button>
                <div className={styles.movingOnContainer}>
                    <p className={styles.movingOn}>Step 2 of 2</p>
                    <HiOutlineArrowLongRight/>
                </div>
            </div>
        </div>
    )
}