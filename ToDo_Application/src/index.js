// Import React library, which is necessary for JSX and React component definitions
import React from 'react';

// Import ReactDOM from the client submodule of react-dom library
// This import style is not typical; usually, it's imported directly from 'react-dom'
import ReactDOM from 'react-dom/client';

// Import the main App component from './App' file
import App from './App';

// Retrieve the root DOM element with id 'root' from the document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component into the root element
// Wrapping <App /> with <React.StrictMode> enables additional checks and warnings for potential issues in the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals