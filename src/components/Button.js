import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    const { input, btnClass } = this.props;
    const classes = `calc-btn col-md-1 py-3 ${btnClass}`;
    return (
      <button className={classes} type="button">{input}</button>
    );
  }
}

Button.propTypes = {
  input: PropTypes.isRequired,
  btnClass: PropTypes.string.isRequired,
};
