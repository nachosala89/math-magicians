import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const handleClickButton = () => {
    const { input, handleClickButton } = props;
    handleClickButton(input);
  };

  const { input, btnClass } = props;
  const classes = `calc-btn col-md-1 py-3 ${btnClass}`;
  return (
    <button className={classes} type="button" onClick={handleClickButton}>{input}</button>
  );
};

Button.propTypes = {
  input: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  handleClickButton: PropTypes.func.isRequired,
};

export default Button;
