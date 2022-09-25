import React from 'react'
import {Card} from '@mui/material/'
import styles from './styles/Item.module.css';
import RemoveTodoButton from './RemoveTodoButton'

export default function Item(todo:any){

    return(
        <div className={styles.itemContainer}>
            <div className={styles.item}>{todo.todo.description}</div>
            <RemoveTodoButton key={todo.todo._id} props={todo}></RemoveTodoButton>
        </div>
    )


}