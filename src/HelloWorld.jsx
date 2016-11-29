import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
  render() {
    return(
      <h1>Hello World! My name is {this.props.name}</h1>
    );
  }
};

HelloWorld.propTypes = {
  name: PropTypes.string
};
