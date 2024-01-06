import React from 'react';
import './App.css';


import Header from './components/Header'; 
import List from  './components/todoList';
import Button from './components/button';
import Counter from './components/counterComponent';


const App = () => {
  return (
    <div className="todo-container">
      <Counter />
      <Header />
      <List item = "ReactJS" />
      <List item = "ExpressJS" />
      <List item = "MongoDB" />
      <List item = "Bashcommand" />
      <List item = "Git&GitHub" />
      <Button />
    </div>
  );
}

export default App;
