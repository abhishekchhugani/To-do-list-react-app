import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TaskSummary from './TaskSummary';

  const todos = [
    {
        id: 1,
        content: 'Hello',
        complete: true
    },
    {
        id: 2,
        content: 'World',
        complete: false
    }
]

it('renders without crashing', () => {
    shallow(<TaskSummary  todos={todos} />);
});

it('snapshot test', () => {
    const wrapper = shallow(<TaskSummary todos={todos}/>);
    expect(wrapper).toMatchSnapshot();
});


it('Displays total count', () => {
    const wrapper = shallow(<TaskSummary todos={todos}/>);
    expect(wrapper.find('#totalCount'))
});

it('Displays completed count', () => {
    const wrapper = mount(<TaskSummary todos={todos}/>);
    expect(wrapper.find('#completedCount'))
});