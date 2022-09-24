import React from 'react'
import {Card} from '@mui/material/'
import styles from './styles/Item.module.css';

export default function Item(todo:any){

    return(
        <>
        <h5 className={styles.item}>{todo.todo.description}</h5>
        </>
    )


}