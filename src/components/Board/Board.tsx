import React, {useEffect, useMemo, useState} from 'react'
import {Card} from '@mui/material/'
import MonthYear from '../Date/MonthYear'
import Day from '../Date/Day'
import DateContainer from '../Date/DateContainer';
import {Fab, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from './Board.module.css'
import useFetch from "../../hooks/useFetch";
import AddTodoButton from "../Button/AddTodoButton";
import {api} from "../../api";
import Item from "../Todo/Item";
import {TodoContext} from "../../context/TodoContext";
import {useContext} from "react";
import {TodoContextType} from "../../types/types.todo";

export default function Board(){

   // const {todos, saveTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;

    //const {data,error,loading} = useFetch('/todos')

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [addTodoView, toggleAddTodoView] = useState(false);
    const [text, setText] = useState("");


    useEffect( ()=>{
        api.get('/todos').then((data)=>{
            setLoading(true)
            setTodos(data.data)
            }
        ).catch((err)=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    },[]);


    function handleChange(e:any) {
        setText(e.target.value);
    }

    async function handleSubmit(e:any){
        e.preventDefault();
        await api.request({url: '/todos', method:'post', params:{description: text}})
        setTodos((await api.get('/todos')).data)
        setText("");
    }

    function handleClick(){
        toggleAddTodoView(!addTodoView);
    }


    return(
        <>
            <Card className={styles.card}>
                <DateContainer/>
                {todos && todos.map((todo:any) => <Item key={todo._id} todo={todo}>todo</Item>)}
                {loading && "Loading"}
                {error && "Error"}
                {addTodoView ? <div className={styles.inputCard}>
                                    <form onSubmit={handleSubmit}>
                                        <TextField label='What needs to get done?' value={text} onChange={handleChange}></TextField>
                                    </form>
                                </div>
                    : <></>}
            </Card>
            <AddTodoButton onClick={handleClick} addTodoView={addTodoView}></AddTodoButton>
        </>
    )


}