import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const Calculator = () => {
  return (
    <div id="main-container">
      <div className="row">
        <Display text="0" />
      </div>
      <div className="row">
        <ActionButton buttonStyle="threeQuarters" text="clear" />
        <ActionButton text="%" />
      </div>
      <div className="row">
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <ActionButton text="x" />
      </div>
      <div className="row">
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <ActionButton text="-" />
      </div>
      <div className="row">
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <ActionButton text="+" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="threeQuarters" text="0" />
        <ActionButton text="=" />
      </div>
    </div>
  );
}
 
export default Calculator;