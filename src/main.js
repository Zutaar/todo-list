var React = require('react');
var ReactDOM = require('react-dom');

import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
