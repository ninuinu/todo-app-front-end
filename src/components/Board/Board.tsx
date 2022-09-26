import React, {useEffect, useMemo, useState} from 'react'
import {Card} from '@mui/material/'
import DateContainer from '../Date/DateContainer';
import {TextField} from "@mui/material";
import styles from './Board.module.css'
import AddTodoButton from "../Button/AddTodoButton";
import {api} from "../../api";
import Item from "../Todo/Item";
import AddTodoField from "../AddTodoField/AddTodoField";

export default function Board(){

    const [todos, setTodos] = useState([]);
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
    },[setTodos]);

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

    async function handleDeleteClick(id:any){
        await api.request({url: '/todos', method:'delete', params:{id: id}})
        setTodos((await api.get('/todos')).data)
    }


    return(
        <>
            <div className={styles.cardOuterWrapper}>
            <Card className={styles.card}>
                <div className={styles.cardInnerWrapper}>
                <DateContainer/>
                    <div className={styles.itemsContainer}>
                {todos && todos.map((todo:any) => <Item key={todo._id} props={[todo, handleDeleteClick]}></Item>)}</div>
                {loading && "Loading"}
                {error && <div className={styles.errorMessage}>Woops! Data could not be loaded</div>}
                {addTodoView ? <AddTodoField props={[text, handleChange, handleSubmit]}></AddTodoField>
                    : <></>}
                </div>
            </Card>
            <AddTodoButton onClick={handleClick} addTodoView={addTodoView}></AddTodoButton>
            </div>
        </>
    )


}