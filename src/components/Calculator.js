import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton(input) {
    this.setState((lastState) => calculate(lastState, input));
  }

  render() {
    const { total, next } = this.state;
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
          <Button btnClass="gray-btn" input="AC" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="+/-" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="%" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" input="÷" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input="7" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="8" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="9" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" input="x" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input="4" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="5" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="6" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" input="-" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" input="1" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="2" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="3" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" input="+" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn col-md-2" input="0" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" input="." handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" input="=" handleClickButton={this.handleClickButton} />
        </div>
      </div>
    );
  }
}
