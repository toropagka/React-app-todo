const TodoInput = ({
  todo,
  setTodo,
  handleAddTodo,
  isEdit,
  handleEditTodo,
  todos,
}) => {
  const handleChange = (event) => {
    setTodo({ ...todo, text: event.target.value });
  };

  return (
    <div className='create-input-wrapper'>
      <input
        className='create-input'
        type='text'
        name='todo'
        placeholder='create todo'
        value={todo.text}
        onChange={handleChange}
      />
      {!isEdit && (
        <button className='add-button' onClick={handleAddTodo}>
          Add
        </button>
      )}
      {isEdit && (
        <button
          className='add-button'
          onClick={() => handleEditTodo(todo, todos)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default TodoInput;
