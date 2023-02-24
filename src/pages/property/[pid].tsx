
import { useRouter } from "next/router"
import { useState } from "react"
import { useQuery } from '@apollo/client'
import PropertyOperations from '../../graphql/operations/properties'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Property.module.css'
import InsuranceCard from "@/components/Properties/InsuranceCard"


export default function Property() {

    const router = useRouter()
    const { pid } = router.query

    const { data, loading, error } = useQuery(PropertyOperations.Queries.loadProperty, {
        variables: { propId: pid }
    })

    console.log(data)

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.header}></div>
                    <div className={styles.main}>
                        <h1 className={styles.address}>{data?.loadProperty.address}</h1>
                        <div className={styles.cityStateZipContainer}>
                            <p className={styles.cityStateZip}>{data?.loadProperty.city},</p>
                            <p className={styles.cityStateZip}>{data?.loadProperty.state}.</p>
                            <p className={styles.cityStateZip}>{data?.loadProperty.zip}</p>
                        </div>
                        <p>sqft: 2100 • bed: 3 • bath: 2</p>
                        <div className={styles.propertyValue}>
                            <p>Current Value: $410,000</p>
                            <p>Purchase Price: $310,000</p>
                        </div>
                        <div className={styles.dataContainer}>
                            <div className={styles.dataHeaderContainer}>
                                <h3 className={styles.contentHeader}>Maintenance Requests</h3>
                                <button>Add Request</button>
                            </div>
                            <div>
                                <p>Status: Open</p>
                                <p>Created Date: 12-12-23</p>
                                <p>Short Description: Broken Toilet</p>
                                <p>Next Step: Plumber replacing on 12-14-23 at 9am.</p>
                            </div>
                            <p>See all closed requests</p>
                        </div>
                        <div className={styles.dataContainer}>
                            <div className={styles.dataHeaderContainer}>
                                <h3 className={styles.contentHeader}>Policies</h3>
                                <button>Add Policy</button>
                            </div>
                            <div className={styles.cardContainer}>
                                <InsuranceCard/>
                            </div>
                        </div>
                        <div className={styles.dataContainer}>
                            <div className={styles.dataHeaderContainer}>
                                <h3 className={styles.contentHeader}>Tenants</h3>
                                <button>Add Tenant</button>
                            </div>
                            <div>
                                <p>John Appleseed</p>
                            </div>
                            <div>
                                <p>Stacy Appleseed</p>
                            </div>
                            <p>See all prior tenants</p>
                        </div>
                        <div className={styles.dataContainer}>
                            <div className={styles.dataHeaderContainer}>
                                <h3 className={styles.contentHeader}>Lease</h3>
                                <button>Add Lease</button>
                            </div>
                        </div>
                        <div className={styles.dataContainer}>
                            <h3>Notes</h3>
                        </div>
                        <button className={styles.deleteButton}>Delete</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}