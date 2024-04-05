import * as React from 'react';
import renderer from 'react-test-renderer';

import { PoppinText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<PoppinText>Snapshot test!</PoppinText>).toJSON();

  expect(tree).toMatchSnapshot();
});
