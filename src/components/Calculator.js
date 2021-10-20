import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <span className="result text-end col-md-4 py-3">0</span>
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input="A/C" />
          <Button btnClass="gray-btn" input="+/-" />
          <Button btnClass="gray-btn" input="%" />
          <Button btnClass="orange-btn" input="÷" />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input={7} />
          <Button btnClass="gray-btn" input={8} />
          <Button btnClass="gray-btn" input={9} />
          <Button btnClass="orange-btn" input="×" />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input={4} />
          <Button btnClass="gray-btn" input={5} />
          <Button btnClass="gray-btn" input={6} />
          <Button btnClass="orange-btn" input="-" />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input={1} />
          <Button btnClass="gray-btn" input={2} />
          <Button btnClass="gray-btn" input={3} />
          <Button btnClass="orange-btn" input="+" />
        </div>
        <div className="row">
          <Button btnClass="gray-btn col-md-2" input={0} />
          <Button btnClass="gray-btn" input="." />
          <Button btnClass="orange-btn" input="=" />
        </div>
      </div>
    );
  }
}
