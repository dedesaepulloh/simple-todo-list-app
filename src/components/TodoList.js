import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Container } from 'reactstrap';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <>
            <Container className="themed-container my-5">
                <h2 style={{textAlign: 'center', color: '#ffffff'}}>What's the Plan for Today</h2>
                <TodoForm onSubmit={addTodo} />
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </Container>
        </>
    )
}

export default TodoList
