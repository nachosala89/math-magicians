import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    const { input } = this.props;
    return (
      <button type="button">{input}</button>
    );
  }
}

Button.propTypes = {
  input: PropTypes.string.isRequired,
};
