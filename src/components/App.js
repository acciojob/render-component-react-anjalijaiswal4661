import React from "react";
import ReactDOM from "react-dom/client";

// Functional component
function App() {
  return (
    <p>I am learning React. My life is getting better.</p>
  );
}

// Render inside <div id="root">
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);