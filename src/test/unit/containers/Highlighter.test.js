import React from 'react';
import ReactDOM from 'react-dom';
import Highlighter from '../../../containers/Highlighter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Highlighter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
