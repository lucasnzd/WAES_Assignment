import React from 'react';
import ReactDOM from 'react-dom';
import SectionLabel from '../../../components/SectionLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionLabel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
