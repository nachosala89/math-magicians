import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div>0</div>
        <Button input="A/C" />
        <Button input="+/-" />
        <Button input="%" />
        <Button input="÷" />
        <Button input={7} />
        <Button input={8} />
        <Button input={9} />
        <Button input="×" />
        <Button input={4} />
        <Button input={5} />
        <Button input={6} />
        <Button input="-" />
        <Button input={1} />
        <Button input={2} />
        <Button input={3} />
        <Button input="+" />
        <Button input={0} />
        <Button input="." />
        <Button input="=" />
      </div>
    );
  }
}
