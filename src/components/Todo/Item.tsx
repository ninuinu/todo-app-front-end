import React from 'react'
import styles from './Item.module.css';
import RemoveTodoButton from "../Button/RemoveTodoButton";

export default function Item(props:any){

    const todo = props.props[0]
    const handleDeleteClick = props.props[1]

    return(
        <div className={styles.itemContainer}>
            <div className={styles.item}>{todo.description}</div>
            <RemoveTodoButton key={todo._id} props={todo} handleClick={handleDeleteClick}></RemoveTodoButton>
        </div>
    )


}