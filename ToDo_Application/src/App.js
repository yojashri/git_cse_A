// Import necessary modules from React and other files
import React, { useState } from 'react';
import "./App.css"; // Import CSS file for styling
import TodoInput from './components/TodoInput'; // Import TodoInput component
import Todolist from './components/TodoList'; // Import Todolist component

function App() {
  // State to manage the list of todos
  const [listTodo, setListTodo] = useState([]);

  // Function to add a new todo to the list
  let addList = (inputText) => {
    if (inputText !== '') // Check if inputText is not empty
      setListTodo([...listTodo, inputText]); // Add new todo to listTodo state
  }

  // Function to delete a todo from the list based on index
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo]; // Create a copy of listTodo
    newListTodo.splice(key, 1); // Remove todo at index 'key'
    setListTodo([...newListTodo]); // Update listTodo state
  }

  // JSX structure of the component
  return (
    <div className="main-container"> {/* Main container for styling */}
      <div className="center-container"> {/* Centered container */}
        <div>
          <h1>Todo List Using React JS</h1> {/* Heading */}
        </div>
        <TodoInput addList={addList} /> {/* TodoInput component for adding new todos */}
        <h1 className="app-heading">TODO</h1> {/* Heading for list */}
        <hr /> {/* Horizontal line */}
        {/* Mapping through listTodo to render each todo */}
        {listTodo.map((listItem, i) => {
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            // Render Todolist component for each todo item
          )
        })}
      </div>
    </div>
  )
}

export default App; // Export the App component as default
