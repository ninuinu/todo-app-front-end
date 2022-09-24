import React from 'react'
import {Card} from '@mui/material/'
import styles from './styles/Date.module.css';

export default function Date(){
    return(
        <>
            <div>
                <div className={styles.date}>31</div>
            </div>
            <div className={styles.monthYearContainer}>
                <div className={styles.month}>Jan</div>
                <div className={styles.year}>2019</div>
            </div>
        </>
    )


}