import React from 'react'
import {Card} from '@mui/material/'
import styles from './styles/DateContainer.module.css'
import Date from "./Date";
import Day from "./Day";

export default function DateContainer(){
    return(
        <div className={styles.dateContainer}>
            <Date/>
            <Day/>
        </div>
    )
}