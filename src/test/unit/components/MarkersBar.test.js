import React from 'react';
import ReactDOM from 'react-dom';
import MarkersBar from '../../../components/MarkersBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkersBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
