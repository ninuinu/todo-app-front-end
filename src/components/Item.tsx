import React from 'react'
import {Card} from '@mui/material/'

export default function Item(todo:any){

    return(
        <>
        <h5>{todo.todo.description}</h5>
        </>
    )


}