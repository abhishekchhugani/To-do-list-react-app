import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, exists } from 'enzyme';
import App from './App';
import TaskSummary from './components/TaskSummary'
import AddItem from './components/AddItem'
import TodoList from './components/TodoList'




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
    shallow(<App />);
});

it('snapshot test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});


it('Displays Task Summary', () => {
    const wrapper = mount(<App todos={todos}/>);
    expect(wrapper.find(<TaskSummary></TaskSummary>))
});

it('Displays Task Summary', () => {
    const wrapper = mount(<App todos={todos}/>);
    expect(wrapper.find(<AddItem></AddItem>))
});

it('Displays Task Summary', () => {
    const wrapper = mount(<App todos={todos}/>);
    expect(wrapper.find(<TodoList></TodoList>))
});
