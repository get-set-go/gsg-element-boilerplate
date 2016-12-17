import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import HelloWorld from '../src';

describe('<HelloWorld /> component', function() {

  it('should HelloWorld exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<HelloWorld />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
