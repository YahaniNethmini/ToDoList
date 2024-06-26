
import React, { useState } from 'react';
import Edit from './assets/Edit_N.png';
import Done from './assets/Done_N.png';
import Delete from './assets/Delete_N.png';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newAssignedDate, setNewAssignedDate] = useState(todo.assignedDate);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);

  const handleSave = () => {
    editTodo(index, { text: newText, assignedDate: newAssignedDate, dueDate: newDueDate });
    setIsEditing(false);
  };

  return (
    <tr>
        <td>
        {isEditing ? (
          <input
            type="date"
            value={newAssignedDate}
            onChange={(e) => setNewAssignedDate(e.target.value)}
          />
        ) : (
          todo.assignedDate
        )}
      </td>
      <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          todo.text
        )}
      </td>
      
      <td>
        {isEditing ? (
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
        ) : (
          todo.dueDate
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => toggleComplete(index)}><img src={Done} alt='Done' className='action' /></button>
            <button onClick={() => setIsEditing(true)}><img src={Edit} alt='Edit' className='action' /></button>
            <button onClick={() => deleteTodo(index)}><img src={Delete} alt='Delete' className='action' /></button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
