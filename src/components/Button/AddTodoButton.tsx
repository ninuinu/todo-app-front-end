import {Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";
import useFetch from "../../hooks/useFetch";
import styles from './AddTodoButton.module.css';
import {Card} from "@mui/material/";
import {api} from "../../api";
import upIcon from "../../assets/up-icon.svg";

export default function AddTodoButton(props:any){

    const addTodoView = props.addTodoView

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
           </> )

        }