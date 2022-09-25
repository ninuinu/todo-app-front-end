export interface ITodo {
    _id: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;

}

export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (text: string) => void;
    deleteTodo: (_id: number) => void;
};

