import React from 'react'
import {Card} from '@mui/material/'
import Item from './Item'
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from './Board.module.css'

export default function Board(){

    function handleClick(){

    }

    return(
        <>
            <Card className={styles.card}>
                    <h3 className='log-in'>Log in</h3>
            </Card>
            <Fab className={styles.circularButton} aria-label="add" onClick={handleClick}>  <AddIcon className={styles.addIcon}/>
            </Fab>
        </>
    )


}