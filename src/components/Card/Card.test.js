import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {
  it('expect to render the Card component', () => {
    expect.assertions(2);
    expect(shallow(<Card />).length).toEqual(1);
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
