const TodoList = ({ list, remove, edit }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className='todo-list'>
          {list.map((todo, index) => (
            <div className='todo' key={index}>
              <li>{todo}</li>
              <button className='delete-button' onClick={() => remove(todo)}>
                Delete
              </button>
              <button className='edit-button' onClick={() => edit(todo, index)}>
                Edit
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className='empty'>
          <p>No tasks</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
