// App.jsx
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { usersReducer } from "./components/Message/store/reducers";
import MessageList from "./components/Message/MessageComponent";
import Message from "./components/Message/Message";
import Navbar from "./components/Navbar/Navbar";

// Combine reducers (in case you add more later)
const rootReducer = combineReducers({
  usersReducer,
});

// Create store with middleware
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Message />
    </Provider>
  );
};

export default App;
