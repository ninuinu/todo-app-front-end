import React, {useEffect, useState} from 'react'
import {Card} from '@mui/material/'
import {api} from "../../api";
import {Item, AddTodoField, AddTodoButton, DateContainer} from "../index";
import styles from './Board.module.css'

import {ITodo} from "../../types/types.todo";

export default function Board(){

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [addTodoView, toggleAddTodoView] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [inputError, setInputError] = useState<boolean>(false);

    useEffect( ()=>{
        api.get('/todos').then((data)=>{
            setLoading(true)
            setTodos(data.data)
            }
        ).catch(()=>{
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
        try{
            await api.request({url: '/todos', method:'post', params:{description: text}})
            setTodos((await api.get('/todos')).data)
            setInputError(false)
        } catch {
            setInputError(true)
        }

        setText("");
    }

    function handleClick(){
        toggleAddTodoView(!addTodoView);
    }

    async function handleDeleteClick(id:string){
        try{
            await api.request({url: '/todos', method:'delete', params:{id: id}})
            setTodos((await api.get('/todos')).data)
        }
        catch(err:any){
            console.log(err.message)
        }
    }


    return(
        <>
            <div className={styles.cardOuterWrapper}>
            <Card className={styles.card}>
                <div className={styles.cardInnerWrapper}>
                <DateContainer/>
                    <div className={styles.itemsContainer}>
                {todos && todos.map((todo:ITodo) => <Item key={todo._id} props={[todo, handleDeleteClick]}></Item>)}</div>
                {loading && "Loading"}
                {error && <div className={styles.errorMessage}>Woops! Data could not be loaded</div>}
                {addTodoView ? <AddTodoField props={[text, handleChange, handleSubmit, inputError]}></AddTodoField>
                    : <></>}
                </div>
            </Card>
            <AddTodoButton onClick={handleClick} addTodoView={addTodoView}></AddTodoButton>
            </div>
        </>
    )
}