import React, { Component } from 'react';
import Vega from 'react-vega';
import useDatasetLoader from './hooks/useDatasetLoader';
import logo from './logo.svg';
import './Widget.css';


function Widget(props) {
  const datasets = useDatasetLoader(props.widget.view.resources)

  return (
    <div className="Widget">{datasets.length}</div>
  )
}

export default Widget;
