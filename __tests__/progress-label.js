import React from 'react';
import renderer from 'react-test-renderer';
import Nested from '../__fixtures__/nested';

test('nested', () => {
  expect(renderer.create(<Nested />).toJSON()).toMatchSnapshot();
});
