import React from 'react';
import ReactDOM from 'react-dom';
import HomeLayout from './HomeLayout';
import ErrorLayout from './ErrorLayout';

it('Show Home layout without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeLayout />, div);
});

it('Show Home layout without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorLayout />, div);
});
