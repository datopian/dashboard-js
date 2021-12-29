import { useState } from 'react';
const {Dataset} = require('data.js');
const toArray = require('stream-to-array')


function useDatasetLoader(datasetId) {
  const [currentState, addDataset] = useState([])
  const config = window.config
  const identifier = config.datasets.find(dataset => {
    const urlParts = dataset.split('/')
    if (urlParts[urlParts.length - 1] === datasetId) {
      return dataset
    }
  })
  // Load datasets
  // Check if this dataset is already loaded:
  if (!(currentState.some(dataset => dataset.identifier.original === identifier))) {
    // Load the dataset:
    Dataset.load(identifier).then(async newDataset => {
      // Load/compile resources:
      await Promise.all(newDataset.resources.map(async resource => {
        // Load it here
        const knownTabularFormats = ['csv', 'tsv', 'dsv']
        if (
          !resource.descriptor._values &&
          knownTabularFormats.indexOf(resource.descriptor.format) !== -1
        ) {
          const rowStream = await resource.rows({keyed: true})
          resource.descriptor._values = await toArray(rowStream)
        }
      }))
      addDataset(v => [...v, newDataset])
    })
  }

  return currentState
}

export default useDatasetLoader;
