
import styles from "../../styles/DataPoint.module.css"



export default function DataPoint(props: any) {
    return (
        <div className={styles.dataPointContainer}>
            <label className={styles.label}>{props.label}:</label>
                { props.editMode ? 
                <input
                    className={styles.input}
                    type="text"
                    placeholder={props.dataValue} 
                ></input> :
                <p className={styles.p}>{props.dataValue}</p>
                }
        </div>
    )
}