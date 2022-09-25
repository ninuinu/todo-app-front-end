import React, {useEffect, useMemo, useState} from 'react'
import {Card} from '@mui/material/'
import Item from './Item'
import Date from './Date'
import Day from './Day'
import DateContainer from './DateContainer';
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from './styles/Board.module.css'
import useFetch from "../hooks/useFetch";
import AddTodoButton from "./AddTodoButton";
import {api} from "../api";

export default function Board(){



    //const {data,error,loading} = useFetch('/todos')

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect( ()=>{
        api.get('/todos').then((data)=>{
            setLoading(true)
            setTodos(data.data)
            }
        ).catch((err)=>{
            setError(false)
        }).finally(()=>{
            setLoading(false)
        })
    })


    return(
        <>
            <Card className={styles.card}>
                <DateContainer/>
                {todos && todos.map((todo:any) => <Item key={todo._id} todo={todo}>todo</Item>)}
                {loading && "Loading"}
                {error && "Error"}
            </Card>
            <AddTodoButton key={1} props={todos}></AddTodoButton>
        </>
    )


}