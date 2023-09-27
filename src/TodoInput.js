const TodoInput = ({
  todo,
  setTodo,
  addTodo,
  isEdit,
  taskIndex,
  editTodo,
  todos,
}) => {
  return (
    <div className='input-wrapper'>
      <input
        type='text'
        name='todo'
        placeholder='create todo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {!isEdit && (
        <button className='add-button' onClick={addTodo}>
          Add
        </button>
      )}
      {isEdit && (
        <button
          className='add-button'
          onClick={() => editTodo(todo, taskIndex, todos)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default TodoInput;
