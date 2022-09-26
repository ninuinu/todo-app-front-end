import {Fab} from "@mui/material";
import styles from "./RemoveTodoButton.module.css";
import React from "react";
import crossIcon from '../../assets/x-icon.svg'

export default function RemoveTodoButton(props:any){

    async function handleClick(){
        props.handleClick(props.props._id)
    }

    return(
        <Fab className={styles.button} aria-label="add" onClick={handleClick}>
            <img src={crossIcon} className={styles.crossIcon}/>
        </Fab>
    )

}

