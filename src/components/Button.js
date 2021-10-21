import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    const { input, handleClickButton, ...state } = this.props;
    handleClickButton(calculate(state, input));
  }

  render() {
    const { input, btnClass } = this.props;
    const classes = `calc-btn col-md-1 py-3 ${btnClass}`;
    return (
      <button className={classes} type="button" onClick={this.handleClickButton}>{input}</button>
    );
  }
}

Button.propTypes = {
  input: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  handleClickButton: PropTypes.func.isRequired,
};
