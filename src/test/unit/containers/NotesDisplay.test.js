import React from 'react';
import ReactDOM from 'react-dom';
import NotesDisplay from '../../../containers/NotesDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotesDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
