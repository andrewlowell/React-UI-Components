import React from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
