import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';

it('Show SearchBox Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox />, div);
});
