import React from 'react';
import ReactDOM from 'react-dom';
import Bredcrumb from './Breadcrumb';

let breadcrumb = 'test > bread';

it('Show Breadcrumb Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bredcrumb bredcrumb={breadcrumb} />, div);
});
