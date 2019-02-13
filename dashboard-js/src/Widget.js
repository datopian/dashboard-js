import React, { Component } from 'react';
import Vega from 'react-vega';
import logo from './logo.svg';
import './Widget.css';

class Widget extends Component {
  render() {
    return (
      <div className="Widget">
        <Vega spec={this.props.compiledView.viewspec} data='readItFromStore' />
      </div>
    );
  }
}

export default Widget;
