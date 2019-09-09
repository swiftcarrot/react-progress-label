import React from 'react';
import renderer from 'react-test-renderer';
import ProgressLabel from '../progress-label';

test('render', () => {
  const component = renderer.create(<ProgressLabel />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
    <svg
      fill="#ff0000"
      height={200}
      viewBox="0 0 200 200"
      width={200}
    />
  `);
});
