import React from 'react';


function Figure(props) {
  let fieldName = props.compiledView.spec.fieldName
  // We expect that after transformation, the `_values` array will have single row:
  let values = props.compiledView.resources[0]._values[0]
  // Flatten the values:
  Object.keys(values).forEach(key => {
    let value = values[key]
    if (value.constructor.name === 'Object') {
      Object.keys(value).forEach(anotherKey => {
        values[anotherKey] = value[anotherKey]
      })
    }
  })
  // Take the value we need:
  let output = values[fieldName]
  // If it's a number, use only 1 decimal place:
  if (!isNaN(output)) {
    output = parseFloat(output).toFixed(1).toString()
  }

  return (
    <>
      <h2>{props.compiledView.title}</h2>
      <div className='info'>
        <span>
          {props.compiledView.spec.prefix || '' + output + props.compiledView.spec.suffix || ''}
        </span>
        <br />
        <h4>{props.compiledView.legend}</h4>
      </div>

      <p>{props.compiledView.footer}</p>
    </>
  )
}

export default Figure;
