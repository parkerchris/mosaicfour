
import { useRouter } from "next/router"
import { useState } from "react"
import { useQuery } from '@apollo/client'
import PropertyOperations from '../../graphql/operations/properties'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Property.module.css'


export default function Property() {

    const router = useRouter()
    const { pid } = router.query

    const { data, loading, error } = useQuery(PropertyOperations.Queries.loadProperty, {
        variables: { propId: pid }
    })

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
                    </div>
                </div>
            </div>
        </Layout>
    )
}