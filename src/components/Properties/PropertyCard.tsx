
import styles from "../../styles/PropertyCard.module.css"
import Link from "next/link";

interface PropertyCardProps {
    id: string;
    address: string;
    city: string;
    state: string;
    zip: string
}

const PropertyCard: any = ( props: any ) => {
    return (
        <Link className={styles.link} href={`property/${props.id}`}>
                <div className={styles.mainContainer}>
                    <div className={styles.detailsContainer}>
                        <div className={styles.firstDetailRow}>
                            <h3 className={styles.address}>{props.address}</h3>
                            <p className={styles.rent}>$2,200/M</p>
                        </div>
                        <div className={styles.secondDetailRow}>
                            <p className={styles.cityState}>{props.city}, {props.state}.</p>
                            <div className={styles.statusContainer}>
                                <div className={styles.statusIcon}></div>

                                <p className={styles.status}>OCCUPIED</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>

    )
}

export default PropertyCard