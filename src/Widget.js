import React from 'react';
import Vega from 'react-vega';
import Spinner from 'react-spinkit';
import * as dprender from 'datapackage-render'

import useDatasetLoader from './hooks/useDatasetLoader';
import Figure from './Figure.js'
import './Widget.css';


function Widget(props) {
  const datasets = useDatasetLoader(props.widget.view.resources[0].datasetId)
  const dataset = datasets.find(dataset => dataset.descriptor.name === props.widget.view.resources[0].datasetId)
  if (dataset) {
    let compiledView = dprender.compileView(props.widget.view, dataset.descriptor)
    if (props.widget.view.specType === 'vega') {
      let vegaSpec = dprender.vegaToVega(compiledView)
      if (vegaSpec) {
        return (
          <Vega spec={vegaSpec} />
        )
      }
    } else if (props.widget.view.specType === 'figure') {
      return (
        <Figure compiledView={compiledView} />
      )
    }
  }
  return (
    <Spinner name='ball-beat' />
  )
}

export default Widget;
