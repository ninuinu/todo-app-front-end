import {Fab} from "@mui/material";
import styles from "./styles/RemoveTodoButton.module.css";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function Item(todo:any){

    function handleClick(){

    }


    return(
        <Fab className={styles.button} aria-label="add" onClick={handleClick}>  <AddIcon className={styles.addIcon}/>
        </Fab>
    )

}

