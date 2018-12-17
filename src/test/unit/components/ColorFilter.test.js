import React from 'react';
import ReactDOM from 'react-dom';
import ColorFilter from '../../../components/ColorFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColorFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
