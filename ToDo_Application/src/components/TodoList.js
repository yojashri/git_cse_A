import React from 'react';

function Todolist(props) {
  return (
    <li className="list-item"> {/* List item container */}
        {props.item} {/* Display the todo item text */}
        <span className='icons'> {/* Container for icons */}
            <i className="fa-solid fa-trash-can icon-delete" 
                onClick={e => {
                    props.deleteItem(props.index); // Call deleteItem function from props with index
                }}
            ></i> {/* Trash can icon for delete */}
        </span>
    </li>
  );
}

export default Todolist; // Export Todolist component as default
