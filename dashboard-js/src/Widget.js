import React, { Component } from 'react';
import logo from './logo.svg';
import './Widget.css';

class Widget extends Component {
  render() {
    return (
      <div className="Widget">
        <header className="Widget-header">
          <img src={logo} className="Widget-logo" alt="logo" />
          <p>
            Edit <code>src/Widget.js</code> and save to reload.
          </p>
          <a
            className="Widget-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Widget;
