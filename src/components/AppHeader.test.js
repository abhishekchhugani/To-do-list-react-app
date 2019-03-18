import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

it('renders without crashing', () => {
    shallow(<AppHeader />);
});

it('snapshot test', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper).toMatchSnapshot();
});


it('renders without crashing', () => {
    const wrapper = shallow(<AppHeader />);
    wrapper.find(<i></i>).exists()
});
