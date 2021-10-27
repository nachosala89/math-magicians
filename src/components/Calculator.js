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
      <div className="d-flex result calc-row align-items-center">
        <span className="w-100 text-end">{result}</span>
      </div>
      <div className="d-flex calc-row">
        <Button btnClass="gray-btn w-25" input="AC" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="+/-" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="%" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn w-25" input="÷" handleClickButton={handleClickButton} />
      </div>
      <div className="d-flex calc-row">
        <Button btnClass="gray-btn w-25" input="7" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="8" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="9" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn w-25" input="x" handleClickButton={handleClickButton} />
      </div>
      <div className="d-flex calc-row">
        <Button btnClass="gray-btn w-25" input="4" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="5" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="6" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn w-25" input="-" handleClickButton={handleClickButton} />
      </div>
      <div className="d-flex calc-row">
        <Button btnClass="gray-btn w-25" input="1" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="2" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="3" handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn w-25" input="+" handleClickButton={handleClickButton} />
      </div>
      <div className="d-flex calc-row">
        <Button btnClass="gray-btn w-50" input="0" handleClickButton={handleClickButton} />
        <Button btnClass="gray-btn w-25" input="." handleClickButton={handleClickButton} />
        <Button btnClass="orange-btn w-25" input="=" handleClickButton={handleClickButton} />
      </div>
    </div>
  );
};

export default Calculator;
