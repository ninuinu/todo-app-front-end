import React from 'react'
import styles from './MonthYear.module.css';

export default function MonthYear(props:any){

    return(
        <>
            <div>
                <div className={styles.date}>{props.date}</div>
            </div>
            <div className={styles.monthYearContainer}>
                <div className={styles.month}>{props.month}</div>
                <div className={styles.year}>{props.year}</div>
            </div>
        </>
    )


}