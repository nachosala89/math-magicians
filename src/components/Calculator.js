import React from 'react';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton(obj) {
    console.log(obj);
    this.setState(obj);
  }

  render() {
    const { total, next, operation } = this.state;
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
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="AC" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="+/-" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="%" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" total={total} next={next} operation={operation} input="÷" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="7" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="8" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="9" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" total={total} next={next} operation={operation} input="x" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="4" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="5" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="6" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" total={total} next={next} operation={operation} input="-" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="1" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="2" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="3" handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" total={total} next={next} operation={operation} input="+" handleClickButton={this.handleClickButton} />
        </div>
        <div className="row">
          <Button btnClass="gray-btn col-md-2" total={total} next={next} operation={operation} input="0" handleClickButton={this.handleClickButton} />
          <Button btnClass="gray-btn" total={total} next={next} operation={operation} input="." handleClickButton={this.handleClickButton} />
          <Button btnClass="orange-btn" total={total} next={next} operation={operation} input="=" handleClickButton={this.handleClickButton} />
        </div>
      </div>
    );
  }
}
