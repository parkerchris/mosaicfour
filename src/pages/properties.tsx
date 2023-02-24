import { Session } from 'next-auth'
import styles from "../styles/Properties.module.css"
import Layout from '../components/Layout/Layout'
import AddProperty from "@/components/Properties/AddProperty"
import PropertyCard from "@/components/Properties/PropertyCard"
import { useState } from "react"
import { useQuery } from '@apollo/client'
import PropertyOperations from '../graphql/operations/properties'
import { LoadPropertiesData } from '@/util/types'


interface PropertiesProps {
    session: Session
}

const Properties: React.FC<PropertiesProps> = ({ session }) => {
    
    const [ toggleAddProperty, setToggleAddProperty ] = useState(false)
    const { data, loading, error } = useQuery<LoadPropertiesData>(PropertyOperations.Queries.loadProperties)
    console.log(data)

    function handleClick() {
        setToggleAddProperty(!toggleAddProperty)
    }
    
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>Properties <span className={styles.headerSpan}>3</span></h1>
                        <button onClick={handleClick} className={styles.addPropertyButton}>Add Property</button>
                    </div>
                    <div className={styles.addProp}>
                        {toggleAddProperty && <AddProperty/>}
                    </div>
                    <div className={styles.main}>
                        {data?.loadProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                id={property.id}
                                address={property.address}
                                city={property.city}
                                state={property.state}
                                zip={property.zip}
                            />
                        ))}
                        <p className={styles.end}>The end</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Properties