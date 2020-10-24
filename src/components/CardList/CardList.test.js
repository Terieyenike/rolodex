import React from 'react';
import { shallow } from 'enzyme';
import { CardList } from './CardList';

describe('CardList', () => {
  it('expect to render the CardList component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'Teri',
        email: 'teri@gmail.com',
        company: 'Transcorp Hilton',
      },
    ];
    expect.assertions(1);
    expect(shallow(<CardList monsters={mockRobots} />)).toMatchSnapshot();
  });
});
