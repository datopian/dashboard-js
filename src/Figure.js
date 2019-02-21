import React from 'react';


function Figure(props) {
  let value
  switch (props.compiledView.spec.operation) {
    case 'show-first-data':
      if (props.compiledView.resources[0]._values) {
        const firstRow = props.compiledView.resources[0]._values[0]
        value = firstRow[props.compiledView.spec.fieldName]
      }
      break
    case 'show-latest-data':
    default:
      if (props.compiledView.resources[0]._values) {
        const length = props.compiledView.resources[0]._values.length
        const lastRow = props.compiledView.resources[0]._values[length - 1]
        value = lastRow[props.compiledView.spec.fieldName]
      }
      break
  }
  
  return (
    <>
      <h2>{props.compiledView.spec.title}</h2>
      <div className='info'>
        <span>{parseFloat(value).toFixed(1) + props.compiledView.spec.suffix}</span> <br />
        <h4>{props.compiledView.spec.legend}</h4>
      </div>

      <p>{props.compiledView.spec.footer}</p>
    </>
  )
}

export default Figure;
