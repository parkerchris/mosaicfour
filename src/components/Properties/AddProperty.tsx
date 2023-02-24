import { useState } from 'react'
import { useMutation } from '@apollo/client'
import PropertyOperations from "../../graphql/operations/properties"
import styles from "../../styles/AddProperty.module.css"

export default function AddProperty() {

    const [ propertyData, setPropertyData ] = useState({
        address: "",
        city: "",
        state: "",
        zip: ""

    })

    console.log(propertyData)

    const handleChange = (event: any) => {
        event.preventDefault();
        setPropertyData(prevPropertyData => {
            return {
                ...prevPropertyData,
                [event.target.name]: event.target.value
            }
        })
    }

    const [createProperty, { data, loading, error }] = useMutation(PropertyOperations.Mutations.addProperty)

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await createProperty({ variables: {
                    address: propertyData.address,
                    city: propertyData.city,
                    state: propertyData.state,
                    zip: propertyData.zip
            } })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3 className={styles.header}>Add a Property</h3>
            <form onChange={handleChange} className={styles.form}>
                <div className={styles.labelInputContainer}>
                    <label>Address</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="enter an addresss"
                        required
                        name="address"
                        //onChange={handleChange}
                    />
                </div>
                <div className={styles.labelInputContainer}>
                    <label>City</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="enter a city"
                        required
                        name="city"
                        //onChange={handleChange}
                    />
                </div>
                <div className={styles.labelInputContainer}>
                    <label>State</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="enter a state"
                        required
                        name="state"
                        //onChange={handleChange}
                    />
                </div>
                <div className={styles.labelInputContainer}>
                    <label>zip</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="enter a zip"
                        required
                        name="zip"
                        //onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Save</button>
            </form>
        </>
    )

}