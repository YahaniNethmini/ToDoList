// src/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [assignedDate, setAssignedDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      addTodo({
        text: value,
        assignedDate,
        dueDate,
      });
      setValue('');
      setAssignedDate('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="date"
        value={assignedDate}
        onChange={(e) => setAssignedDate(e.target.value)}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
