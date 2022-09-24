import React, {useEffect, useMemo, useState} from 'react'
import {Card} from '@mui/material/'
import Item from './Item'
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from './Board.module.css'
import useFetch from "../hooks/useFetch";

export default function Board(){

    function handleClick(){

    }


    const {data,error,loading} = useFetch('/todos')

    return(
        <>
            <Card className={styles.card}>
                    <h3 className='log-in'>Log in</h3>
                {data && data.map((todo:any) => <Item key={todo._id} todo={todo}>todo</Item>)}
                {loading && "Loading"}
                {error && "Error"}
            </Card>
            <Fab className={styles.circularButton} aria-label="add" onClick={handleClick}>  <AddIcon className={styles.addIcon}/>
            </Fab>
        </>
    )


}