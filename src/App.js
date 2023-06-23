
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';
import sticker from './images/sticker.png';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALA', completed: false },
];

function App() {
  return (
    <div className='main-container'>
      <div className='add-container'>
        <h1>Agregar To Do</h1>
        <div className='add-container-button'>
          <CreateTodoButton />
        </div>
      </div>
      <div className='todo-container'>
        <TodoCounter completed={16} total={22} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>


      </div>
    </div> //React.Fragment es un componente que no se renderiza, solo sirve para agrupar elementos en vez de un div
  );
}


export default App;

//Puedes insertar un componente dentro de otro componente y así sucesivamente, utilizando la etiqueta del componente como si fuera una etiqueta HTML.