import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';

// Read 'config' from global variable:
const config = window.config

if (config) {
  config.widgets.forEach(widget => {
    ReactDOM.render(<Dashboard />, document.querySelectorAll(widget.dataId));
  })
} else {
  ReactDOM.render(
    <div>'Missing "config" global variable. Please, refer to README.'</div>,
    document.getElementById('root')
  );
}

// If you want your Dashboard to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
