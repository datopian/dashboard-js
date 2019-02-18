import React from 'react';
import Vega from 'react-vega';
import * as dprender from 'datapackage-render'

import useDatasetLoader from './hooks/useDatasetLoader';
import './Widget.css';


function Widget(props) {
  const datasets = useDatasetLoader()
  const dataset = datasets.find(dataset => dataset.descriptor.name === props.widget.view.resources[0].datasetId)
  if (dataset) {
    let compiledView = dprender.compileView(props.widget.view, dataset.descriptor)
    let vegaSpec = dprender.vegaToVega(compiledView)
    if (vegaSpec) {
      return (
        <Vega spec={vegaSpec} />
      )
    }
  }
  return (
    <div>'Loading...'</div>
  )
}

export default Widget;
