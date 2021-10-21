import PropTypes from 'prop-types';
import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    const { input, handleClickButton } = this.props;
    handleClickButton(input);
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
