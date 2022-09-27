import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import styles from './AddTodoButton.module.css';
import upIcon from "../../../assets/up-icon.svg";

export default function AddTodoButton(props:any){

    const addTodoView:boolean = props.addTodoView

    function handleClick() {
        props.onClick()
    }

    return(
        <>
        <Fab className={styles.circularButton} aria-label="add" onClick={handleClick}>
            {!addTodoView ?
                <AddIcon className={styles.addIcon}/> :
                <img src={upIcon} className={styles.upIcon}/>
            }
        </Fab>
        </>
    )
}