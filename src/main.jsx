// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App";

// Import the CSS file
import "./index.css";

// Import the Redux store
import store from "../src/app/store";

// Import the Provider component from react-redux
import { Provider } from "react-redux";

// Render the App component inside the root element
// Wrap the App in the Provider to give it access to the Redux store
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
