import {Fab} from "@mui/material";
import styles from "./RemoveTodoButton.module.css";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import crossIcon from '../../assets/x-icon.svg'
import {api} from "../../api";

export default function RemoveTodoButton(todo:any){

    async function handleClick(){
        await api.request({url: '/todos', method:'delete', params:{id: todo.props.todo._id}})


    }

    return(
        <Fab className={styles.button} aria-label="add" onClick={handleClick}>
            <img src={crossIcon} className={styles.crossIcon}/>
        </Fab>
    )

}

