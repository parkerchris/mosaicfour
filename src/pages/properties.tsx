import styles from "../styles/Properties.module.css"
import Layout from '../components/Layout/Layout'
import AddProperty from "@/components/Properties/AddProperty"
import PropertyCard from "@/components/Properties/PropertyCard"
import { useState } from "react"


export default function Properties() {
    
    const [ toggleAddProperty, setToggleAddProperty ] = useState(false)

    function handleClick() {
        setToggleAddProperty(!toggleAddProperty)
    }
    
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>Properties</h1>
                        <button onClick={handleClick}>Add Property</button>
                    </div>
                    <div className={styles.addProp}>
                        {toggleAddProperty && <AddProperty/>}
                    </div>
                    <div className={styles.main}>
                        <PropertyCard/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}