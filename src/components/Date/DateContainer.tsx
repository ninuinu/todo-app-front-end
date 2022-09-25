import React from 'react'
import styles from './DateContainer.module.css'
import MonthYear from "./MonthYear";
import Day from "./Day";

export default function DateContainer(){

    const today:any = new Date();
    let year = today.getFullYear();
    let month = today.toLocaleDateString('en-US', {month: 'short'})
    let date =   today.getDate();
    let day = today.toLocaleDateString('en-US', {weekday: 'long'})


    return(
        <div className={styles.dateContainer}>
            <MonthYear month={month} year={year} date={date}/>
            <Day day={day}/>
        </div>
    )
}