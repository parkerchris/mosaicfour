import styles from "../../styles/DataDisplay.module.css"
import { useState } from "react"
import DataPoint from "./DataPoint"


export default function DataDisplay( props: any ) {
/* 
    const [ propertyInfo, setPropertyInfo ] = useState({
        sgft: "-",
        beds: "-",
        baths: "-",
        yearBuilt: "-",
        dateOfPurchase: "-",
        purchasePrice: "-",
        parcelNumber: "-",
        mailboxNumber: "-",
        mailBoxLocation: "-",
        garbageDay: "-",
        landscapeDay: "-",
    }) */

    const [ propertyInfo, setPropertyInfo ] = useState("-")
    
    
    const [ editMode, setEditMode ] = useState(false)

    function edit(event: any) {

        setEditMode(!editMode)
    }
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.selectorContainer}>
                    <p>Information</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Neighbors</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Comparables</p>
                </div>
                <div className={styles.selectorContainer}>
                    <p>Comments</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <form>
                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>This is the square footage:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={props.sqft} 
                            ></input> :
                        <p className={styles.p}>{props.sqft}</p>
                }
                    </div>
                    <DataPoint
                        editMode={editMode}
                        label="Sqft"
                        dataValue={props.sqft}
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Beds"
                        dataValue="3"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Baths"
                        dataValue="2"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Year Built"
                        dataValue="1992"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Date of Purchase"
                        dataValue="12-12-23"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Purchase Price"
                        dataValue="$315,000"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Parcel Number"
                        dataValue="093824098234"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Mailbox Number"
                        dataValue="3"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Mailbox Location"
                        dataValue="Corner of Lakeside and Hemlock"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Garbage Pick up Day"
                        dataValue="Thursday"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="Landscapers Day"
                        dataValue="Wednesday"
                    />
                </form>   
            </div>
            <div className={styles.farRightContainer}>
                <button onClick={edit}>Edit</button>
                <button>Save</button>
            </div>
        </div>
    )
}