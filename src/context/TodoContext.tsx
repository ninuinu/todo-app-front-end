import {createContext, useState} from 'react'

import {ITodo, TodoContextType} from "../types/types.todo";
import {api} from "../api";

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider : React.FC<React.ReactNode> = ( children ) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const saveTodo = async (text:string) => {
        const newTodo = await api.request({url: '/todos', method:'post', params:{description: text}})
        setTodos((await api.get('/todos')).data)
    };

    const deleteTodo = async (id: number) => {
        await api.request({url: '/todos', method:'delete', params:{id: id}})
        setTodos((await api.get('/todos')).data)
    };
    return <TodoContext.Provider value={{ todos, saveTodo, deleteTodo }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;