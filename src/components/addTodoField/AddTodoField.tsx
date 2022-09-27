import React from 'react'
import styles from "../board/Board.module.css";
import {TextField, useMediaQuery} from "@mui/material";

export default function AddTodoField(props:any){

    const isMobile = useMediaQuery("(max-width: 320px)");

    const text = props.props[0]
    const handleChange = props.props[1]
    const handleSubmit = props.props[2]
    const inputError = props.props[3]

    return(
        <div className={styles.inputCard}>
            <form onSubmit={handleSubmit}>
                <TextField label={!inputError ? 'What needs to get done?' : 'Can\'t create an empty todo!'} size={isMobile? "small" : "medium"} value={text} onChange={handleChange} className={styles.textField}></TextField>
            </form>
        </div>
    )


}