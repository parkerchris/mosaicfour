
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useQuery } from '@apollo/client'
import PropertyOperations from '../../graphql/operations/properties'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Property.module.css'
import InsuranceCard from "@/components/Properties/InsuranceCard"
import DataDisplay from "@/components/DataDisplay/DataDisplay"
import MaintenanceDataDisplay from "@/components/DataDisplay/MaintenanceDataDisplay"
import TaxInsuranceDataDisplay from "@/components/DataDisplay/TaxInsuranceDataDisplay"
import { IoBatteryHalfSharp } from "react-icons/io5"
import { BADHINTS } from "dns"
import PerformanceDisplay from "@/components/DataDisplay/PerformanceDisplay"


export default function Property() {

    const router = useRouter()
    const { pid } = router.query

    const { data, loading, error } = useQuery(PropertyOperations.Queries.loadProperty, {
        variables: { propId: pid }
    })

    console.log(data)

    const [ dataDisplayed, setDataDisplayed ] = useState("performance")

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <div className={styles.headerInnerContainer}>
                            <h1 className={styles.address}>{data?.loadProperty.address}</h1>
                            <div className={styles.partnersContainer}>
                                <div className={styles.avatar}><p>CP</p></div>
                                <div className={styles.avatar}><p>PP</p></div>
                                <div className={styles.avatar}><p>KP</p></div>
                            </div>
                        </div>

                        <div className={styles.cityStateZipContainer}>
                            <p className={styles.cityStateZip}>{data?.loadProperty.city},</p>
                            <p className={styles.cityStateZip}>{data?.loadProperty.state}.</p>
                            <p className={styles.cityStateZip}>{data?.loadProperty.zip}</p>
                        </div>

                    </div>
                    <div className={styles.main}>
                        <div className={styles.headerSelectorContainer}>
                            <div className={styles.selectorContainer}>
                                <p 
                                    className={styles.selector}
                                    onClick={() => setDataDisplayed("performance")}
                                        >Performance</p>
                            </div>
                            <div className={styles.selectorContainer}>
                                <p 
                                    className={styles.selector}
                                    onClick={() => setDataDisplayed("propertyInfo")}
                                        >Property Info</p>
                            </div>
                            <div className={styles.selectorContainer}>
                                <p 
                                    className={styles.selector}
                                    onClick={() => setDataDisplayed("taxInsurance")}
                                        >Tax & Insurance</p>
                            </div>
                            <div className={styles.selectorContainer}>
                                <p 
                                    className={styles.selector}
                                    onClick={() => setDataDisplayed("maintenance")}
                                        >Maintenance</p>
                            </div>
                            <div className={styles.selectorContainer}>
                                <p className={styles.selector}>Tenants</p>
                            </div>
                            <div className={styles.selectorContainer}>
                                <p className={styles.selector}>Notes</p>
                            </div>
                        </div>
{/*                             <div className={styles.dataContainer}>
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
                        <button className={styles.deleteButton}>Delete</button> */}

                            {(() => {
                                    switch (dataDisplayed) {
                                    case 'performance':
                                        return <PerformanceDisplay/>
                                    case 'propertyInfo':
                                        return <DataDisplay
                                                sqft={data?.loadProperty.propertyData.sqft}
                                                propInfoId={data?.loadProperty.propertyData.id}
                                                beds={data?.loadProperty.propertyData.beds}
                                                baths={data?.loadProperty.propertyData.baths}
                                                yearBuilt={data?.loadProperty.propertyData.yearBuilt}
                                                purchasePrice={data?.loadProperty.propertyData.purchasePrice}
                                                purchaseDate={data?.loadProperty.propertyData.purchaseDate}
                                                rent={data?.loadProperty.propertyData.rent}
                                                rentDuration={data?.loadProperty.propertyData.rentDuration}
                                                mailboxNumber={data?.loadProperty.propertyData.mailboxNumber}
                                                mailboxLocation={data?.loadProperty.propertyData.mailboxLocation}
                                                garbageDay={data?.loadProperty.propertyData.garbageDay}
                                                landscapeDay={data?.loadProperty.propertyData.landscapeDay}
                                            />
                                    case 'maintenance':
                                        return <MaintenanceDataDisplay/>
                                    case 'taxInsurance':
                                        return <TaxInsuranceDataDisplay/>
                                    default:
                                        return null
                                    }
                                })()}
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}