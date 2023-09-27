import './App.css';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [taskIndex, setTaskIndex] = useState(null);

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo !== text);
    setTodos(newTodos);
  };

  const editText = (text, index) => {
    setTodo(text);
    setIsEdit(true);
    setTaskIndex(index);
  };

  const editTodo = (text, index, todos) => {
    const newTodos = [...todos];
    newTodos[index] = text;
    setTodos(newTodos);
    setTodo('');
    setIsEdit(false);
  };

  return (
    <div className='App'>
      <h1>React todo</h1>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
        isEdit={isEdit}
        taskIndex={taskIndex}
        editTodo={editTodo}
        todos={todos}
      />
      <TodoList list={todos} remove={deleteTodo} edit={editText} />
    </div>
  );
};

export default App;
