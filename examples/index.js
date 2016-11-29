import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from '../src';

ReactDOM.render(
  <div>
    <HelloWorld name="Mr. ABC" />
    <HelloWorld name="Mr. XYZ" />
  </div>,
  document.getElementById('container')
);
