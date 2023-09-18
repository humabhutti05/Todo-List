
import React, { useState } from "react";
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import './Todo.css';

function TodoItem({ todo, index, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the edited text and exit edit mode
    setIsEditing(false);
    // Pass the edited text and index to a function for saving or updating the todo in your parent component or state management.
    // Example: saveEditedTodo(editedText, index);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li data-aos="zoom-up">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleSaveClick}
          autoFocus
          size={23}
        />
      ) : (
        <span>{editedText}</span>
      )}

      <button
        onClick={() => removeTodo(index)}
        style={{
          padding: "5px",
          margin: "5px",
          width: "20px",
          color: "red",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer"
        }}
        data-aos="fade-in-up"
      >
        <FaTrashAlt size={15} />
      </button>
      {isEditing ? (
        <button
        className="edit"
          onClick={handleSaveClick}
          style={{
            padding: "5px",
            margin: "5px",
            width: "20px",
            color: "green",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",

          }}
          data-aos="fade-in-up"
        >
          <IoCheckmarkDoneCircle size={30} />
        </button>
      ) : (
        <button
          onClick={handleEditClick}
          style={{
            padding: "5px",
            margin: "5px",
            width: "30px",
            color: "blue",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer"
          }}
          data-aos="fade-in-up"
        >
          <FaRegEdit />
        </button>
      )}
    </li>
  );
}

export default TodoItem;
