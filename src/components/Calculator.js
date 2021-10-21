import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
  });

  const handleClickButton = (input) => {
    setState((state) => calculate(state, input));
  };

  const { total, next } = state;
  let result = 0;
  if (next !== null) {
    result = next;
  } else if (total !== null) {
    result = total;
  }
  return (
    <div className="calc-container">
      <div className="row">
        <span className="result text-end col-md-4 py-3">{result}</span>
      </div>
      <div className="row">
        <Button btnClass="gray-btn" input="AC" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="+/-" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="%" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn" input="÷" handleClickButton={handleClickButton} />
      </div>
      <div className="row">
        <Button btnClass="gray-btn" input="7" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="8" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="9" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn" input="x" handleClickButton={handleClickButton} />
      </div>
      <div className="row">
        <Button btnClass="gray-btn" input="4" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="5" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="6" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn" input="-" handleClickButton={handleClickButton} />
      </div>
      <div className="row">
        <Button btnClass="gray-btn" input="1" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="2" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="3" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn" input="+" handleClickButton={handleClickButton} />
      </div>
      <div className="row">
        <Button btnClass="gray-btn col-md-2" input="0" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn" input="." handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn" input="=" handleClickButton={handleClickButton} />
      </div>
    </div>
  );
};

export default Calculator;
