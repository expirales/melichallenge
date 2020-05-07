import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

it('Show Navbar Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});
