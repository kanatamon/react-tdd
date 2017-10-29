import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should include `<input>`', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('input').length).toBe(1);
});
