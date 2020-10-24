import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton', () => {
  it('expect to render the Card component', () => {
    const mockColor = 'red';
    expect.assertions(1);
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
  });

  it('correctly increment the counter', () => {
    const wrapper = shallow(<CounterButton />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 });
  });
});
