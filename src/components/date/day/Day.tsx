import React from 'react'
import styles from './Day.module.css'

export default function Day(props:any){

    return(
        <>
            <div className={styles.day}>{props.day.toUpperCase()}</div>
        </>
    )
}