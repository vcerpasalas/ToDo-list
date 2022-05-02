import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="tarea"
          type="text"
          placeholder="Agreaga un elemento"
          onChange={handleChange}
          className="todo-input"
        />
        <button className="todo-button">Agregar</button>
      </form>
    </div>
  );
}

export default TodoForm;
