import React from 'react'
import styles from "../Board/Board.module.css";
import {TextField, useMediaQuery} from "@mui/material";

export default function AddTodoField(props:any){

    const isMobile = useMediaQuery("(max-width: 320px)");

    const text = props.props[0]
    const handleChange = props.props[1]
    const handleSubmit = props.props[2]

    return(
        <div className={styles.inputCard}>
            <form onSubmit={handleSubmit}>
                <TextField label='What needs to get done?' size={isMobile? "small" : "medium"} value={text} onChange={handleChange} className={styles.textField}></TextField>
            </form>
        </div>
    )


}