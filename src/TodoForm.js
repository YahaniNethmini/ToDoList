
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
      <table className='addvalue'>
        <tr>
          <td>
            <p>Assigned Date</p>
          </td>
          <td>
            <input
              type="date"
              value={assignedDate}
              onChange={(e) => setAssignedDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
           <p> Add new task</p>
          </td>
          <td>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add a new task"
            />
          </td>
        </tr>
        <tr>
          <td>
            <p>Due Date</p>
          </td>
          <td>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </td>
        </tr>
      </table>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
