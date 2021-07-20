import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Comer', 'Estudar React', 'Exercitar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((item) => Task(item)) }</ul>
    );
  }
}

export default App;
