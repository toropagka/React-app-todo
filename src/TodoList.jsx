import React from 'react';

const TodoList = ({
  list,
  handleDeleteTodo,
  handleEditText,
  handleOnChange,
}) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className='todo-list'>
          {list.map((todo) => (
            <div className='todo-item' key={todo.id}>
              <input
                type='checkbox'
                className='item-checkbox'
                checked={todo.isCompleted}
                onChange={() => handleOnChange(todo.id)}
              ></input>
              <li
                className={`
                  ${
                    todo.isCompleted
                      ? 'item-text item-text--completed'
                      : 'item-text'
                  }`}
              >
                {todo.text}
              </li>
              <button
                className='item--delete'
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
              <button
                className='item--edit'
                onClick={() => handleEditText(todo)}
              >
                Edit
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className='todo-list--empty'>
          <p>No tasks</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
