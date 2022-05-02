import React from 'react';

function Todo(props) {
  const { todos, removeTodo, completeTodo } = props;
  return todos.map((todo, index) => {
    return (
      <div
        key={index}
        className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <button className="remove-button" onClick={() => removeTodo(todo.id)}>
          Eliminar
        </button>
      </div>
    );
  });
}

export default Todo;
