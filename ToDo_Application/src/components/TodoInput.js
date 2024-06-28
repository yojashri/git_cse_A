import React, { useState } from "react";

function TodoInput(props) {
    // State to manage the input text for todo
    const [inputText, setInputText] = useState('');

    // Function to handle Enter key press
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) { // Check if Enter key is pressed
            props.addList(inputText); // Call addList function from props to add todo
            setInputText(""); // Clear inputText after adding todo
        }
    }

    return (
        <div className="input-container"> {/* Container for input and button */}
            <input
                type="text"
                className="input-box-todo" // CSS class for input box styling
                placeholder="Enter your todo" // Placeholder text for input box
                value={inputText} // Bind inputText state to input value
                onChange={e => {
                    setInputText(e.target.value); // Update inputText state on change
                }}
                onKeyDown={handleEnterPress} // Call handleEnterPress function on key down
            />
            <button
                className="add-btn" // CSS class for add button styling
                onClick={() => {
                    props.addList(inputText); // Call addList function from props on button click
                    setInputText(""); // Clear inputText after adding todo
                }}
            >
                + {/* Text or icon for add button */}
            </button>
        </div>
    );
}

export default TodoInput; // Export TodoInput component as default
