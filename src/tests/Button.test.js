import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('renders correctly', () => {
  const handleClickButton = () => {};
  const button = renderer
    .create(<Button btnClass="gray-btn w-25" input="AC" handleClickButton={handleClickButton} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
