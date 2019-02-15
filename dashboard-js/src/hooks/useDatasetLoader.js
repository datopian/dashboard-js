import React, { useState, useEffect } from 'react';
const {Dataset} = require('data.js');


function useDatasetLoader(identifiersOrResources) {
  const [currentDatasets, addDataset] = useState([])
  const config = window.config

  useEffect(() => {
    // Load datasets:
    config.datasets.forEach(identifier => {
      // Check if this dataset is already loaded:
      if (!currentDatasets.some(dataset => dataset.identifier.original === identifier)) {
        // Load the dataset:
        Dataset.load(identifier)
          .then(dataset => {
            // Load/compile resources:
            dataset.resources.map(async resource => {
              // Load it here
            })
            // Create a new list of datasets by including a new one:
            const newDatasets = []
            if (Array.isArray(currentDatasets)) {
              newDatasets.concat(currentDatasets)
              newDatasets.push(dataset)
            }
            addDataset(newDatasets)
            return currentDatasets
          })
      }
    })

    // Find required dataset and return it:
    identifiersOrResources.forEach(resource => {
      const dataset = currentDatasets.find(dataset => dataset.name === resource.datasetId)
      return dataset
    })
  })

  return currentDatasets
}

export default useDatasetLoader;
