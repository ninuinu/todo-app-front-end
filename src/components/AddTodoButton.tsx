import {Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";
import useFetch from "../hooks/useFetch";
import styles from './styles/AddTodoButton.module.css';
import {Card} from "@mui/material/";
import {api} from "../api";

export default function AddTodoButton(props:any){

    const [addTodoView, toggleAddTodoView] = useState(false);
    const [text, setText] = useState("");

    function handleClick(){
        toggleAddTodoView(!addTodoView);
    }

    function handleChange(e:any) {
        setText(e.target.value);
    }

    async function handleSubmit(e:any){
        e.preventDefault();
        await api.request({url: '/todos', method:'post', params:{description: text}})
        setText("");
    }


    return(
        <> {addTodoView ? <Card className={styles.inputCard}>
                            <form onSubmit={handleSubmit}>
                                <TextField label='What needs to get done?' value={text} onChange={handleChange}></TextField>
                            </form>
                        </Card>
            : <></>}
        <Fab className={styles.circularButton} aria-label="add" onClick={handleClick}>  <AddIcon className={styles.addIcon}/>
        </Fab>
           </> )

        }