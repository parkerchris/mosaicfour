import styles from "../../styles/DataDisplay.module.css"
import { useState, useEffect } from "react"
import { useMutation, useQuery } from '@apollo/client'
import DataPoint from "./DataPoint"
import PropertyOperations from "../../graphql/operations/properties"


export default function DataDisplay( props: any ) { 

    const [ propertyInfo, setPropertyInfo ] = useState({
        sqft: props.sqft,
        beds: props.beds,
        baths: props.baths,
        yearBuilt: props.yearBuilt,
        purchaseDate: props.purchasePrice,
        purchasePrice: props.purchasePrice,
        rent: props.rent,
        rentDuration: props.rentDuration,
        /* parcelNumber: props.parcelNumber, */
        mailboxNumber: props.mailboxNumber,
        mailBoxLocation: props.mailboxLocation,
        garbageDay: props.garbageDay,
        landscapeDay: props.landscapeDay,
    })

    const reloadSession = () => {
        const event = new Event("visibilitychange")
        document.dispatchEvent(event)
    }

    function refreshPage() {
        window.location.reload()
    }


    const handleChange = (event: any) => {
        event.preventDefault()
        setPropertyInfo(prevPropertyInfo => {
            return {
                ...prevPropertyInfo,
                [event.target.name]: event.target.value
            }
        })
    }
    
    
    const [ updatePropertyInfo, {data, loading, error} ] = useMutation(PropertyOperations.Mutations.updatePropertyInfo)

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try {
            await updatePropertyInfo({ variables: {
                propInfoId: props.propInfoId,
                sqft: propertyInfo.sqft,
                beds: propertyInfo.beds,
                baths: propertyInfo.baths,
                yearBuilt: propertyInfo.yearBuilt,
                purchaseDate: propertyInfo.purchaseDate,
                purchasePrice: propertyInfo.purchasePrice,
                mailboxNumber: propertyInfo.mailboxNumber,
                garbageDay: propertyInfo.garbageDay,
                landscapeDay: propertyInfo.landscapeDay,
            }})
        } catch(error) {
            console.log(error)
        }
        setEditMode(false)
        
        //reloadSession()
        //This works, but is there a better way besides refreshing the page?
        refreshPage()
    }




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
                <form onChange={handleChange}>
                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Sqft:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.sqft}
                            name="sqft"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.sqft}</p>
                            }
                    </div>

                    
                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Beds:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.beds}
                            name="beds"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.beds}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Baths:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.baths}
                            name="baths"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.baths}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Year Built:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.yearBuilt}
                            name="yearBuilt"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.yearBuilt}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Date of Purchase:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.purchaseDate}
                            name="dateOfPurchase"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.purchaseDate}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Purchase Price:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.purchasePrice}
                            name="purchasePrice"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.purchasePrice}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Parecel Number:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.beds}
                            name="parcelNumber"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.beds}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Mailbox Number:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.mailboxNumber}
                            name="mailboxNumber"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.mailboxNumber}</p>
                            }
                    </div>

                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Mailbox Location:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.mailBoxLocation}
                            name="mailboxLocation"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.mailBoxLocation}</p>
                            }
                    </div>

                    
                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Garbage Day:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.garbageDay}
                            name="garbageDay"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.garbageDay}</p>
                            }
                    </div>

                    
                    <div className={styles.dataPointContainer}>
                        <label className={styles.label}>Landscape Day:</label>
                            { editMode ? 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={propertyInfo.landscapeDay}
                            name="landscapeDay"
                            ></input> :
                        <p className={styles.p}>{propertyInfo.landscapeDay}</p>
                            }
                    </div>
                    <DataPoint
                        editMode={editMode}
                        label="asdf"
                        dataValue={props.sqft}
                    />
                    <DataPoint
                        editMode={editMode}
                        label="asdfasdf"
                        dataValue="3"
                    />
                    <DataPoint
                        editMode={editMode}
                        label="asdf"
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
                <button 
                    onClick={edit}
                    /* disabled={editMode} */
                    >Edit</button>
                <button
                    onClick={handleSubmit}
                    >Save</button>
            </div>
        </div>
    )
}