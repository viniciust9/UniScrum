
import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from './components/task';
import Login from './components/login';
import Home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/*<Task text="salvar1"/>*/}
  </React.StrictMode>
);
