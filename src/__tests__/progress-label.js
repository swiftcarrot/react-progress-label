import React from 'react';
import renderer from 'react-test-renderer';
import ProgressLabel from '../progress-label';

test('render', () => {
  const component = renderer.create(<ProgressLabel />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<svg
  height={200}
  viewBox="0 0 200 200"
  width={200}
>
  <circle
    cx={100}
    cy={100}
    r={90}
    style={
      Object {
        "fill": "#ffffff",
        "stroke": "#ff0000",
        "strokeWidth": 20,
      }
    }
  />
</svg>
`);
});
