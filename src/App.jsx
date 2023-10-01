import './App.css';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  const [todo, setTodo] = useState({
    id: new Date().valueOf(),
    text: '',
    isCompleted: false,
  });

  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddTodo = () => {
    if (todo?.text?.length) {
      setTodos([...todos, todo]);
      setTodo({
        id: new Date().valueOf(),
        text: '',
        isCompleted: false,
      });
    }
  };

  const handleOnChange = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEditText = (todo) => {
    setTodo({
      id: todo.id,
      text: todo.text,
      isCompleted: todo.isCompleted,
    });
    setIsEdit(true);
  };

  const handleEditTodo = (editedTodo, todos) => {
    const newTodos = todos.map((todoItem) =>
      todoItem.id === editedTodo.id ? editedTodo : todoItem
    );
    setTodos(newTodos);
    setTodo({
      id: new Date().valueOf(),
      text: '',
      isCompleted: false,
    });
    setIsEdit(false);
  };

  return (
    <div className='App'>
      <h1>React todo</h1>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
        isEdit={isEdit}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
      <TodoList
        list={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditText={handleEditText}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default App;
