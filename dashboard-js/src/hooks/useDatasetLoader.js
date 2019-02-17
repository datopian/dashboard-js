import React, { useState, useEffect } from 'react';
const {Dataset} = require('data.js');
const toArray = require('stream-to-array')


function useDatasetLoader(identifiersOrResources) {
  const [currentDatasets, addDataset] = useState([])
  const config = window.config

  useEffect(() => {
    // Load datasets:
    config.datasets.forEach(async identifier => {
      // Check if this dataset is already loaded:
      if (!currentDatasets.some(dataset => dataset.identifier.original === identifier)) {
        // Load the dataset:
        const dataset = await Dataset.load(identifier)
        // Load/compile resources:
        await Promise.all(dataset.resources.map(async resource => {
          // Load it here
          const rowStream = await resource.rows({keyed: true})
          resource.descriptor._values = await toArray(rowStream)
        }))
        // Create a new list of datasets by including a new one:
        const newDatasets = []
        if (Array.isArray(currentDatasets)) {
          newDatasets.concat(currentDatasets)
          newDatasets.push(dataset)
        }
        addDataset(newDatasets)
        return currentDatasets
      }
    })
  })

  return currentDatasets
}

export default useDatasetLoader;
