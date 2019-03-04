## Usage

Set up `config` global variable available from `window.config` where you can specify how the dashboard should be rendered:

```
{
  widgets: [...],
  datasets: [...]
}
```

* `widgets` - a list of objects where each object contains information about where a widget should be injected and how it should look like. See [public/index.html](https://github.com/datahq/dashboard-js/blob/master/public/index.html) for an example.
* `datasets` - a list of dataset URLs.

A standard widget should have following structure:

```
{
  "elementId": "",
  "view": {
    "metadata": {},
    "resources": [
      {
        "datasetId": "",
        "name": "",
        "transform": []
      }
    ],
    "specType": "",
    "spec": {

    }
  }
}
```

where:

* `elementId` - is "id" of the attribute you want to use as a container of your widget.
* `view` - descriptor of a view (widget).
  * `metadata` - metadata such as title, name etc.
  * `resources` - list of resources needed for a widget and required manipulations (transforms).
  	* `datasetId` - the id (name) of the dataset from which the resource is extracted.
  	* `name` - name of the resource.
  	* `transform` - transformations required for a resource.
  * `specType` - type of a widget, e.g., `vega` or `figure`.
  * `spec` - specification for selected widget type.

### Figure widget

A specification for "Figure widget" would have following structure:

```
{
  "title": "",
  "operation": "",
  "fieldName": "",
  "suffix": "",
  "legend": "",
  "footer": ""
}
```

which will be rendered as HTML:

```
<h2>Title</h2>
<div className='info'>
  <span>Value + suffix</span> <br />
  <h4>Legend</h4>
</div>

<p>Footer</p>
```

where "Value" is calculated based on "operation" and "fieldName" properties. Currently, only basic two types of operations are supported:

* `show-first-data` - takes the first entry from the array of values.
* `show-latest-data` - takes the last entry from the array of values.
* `average` - coming soon.
* `min` and `max` - coming soon.

### Vega widget

You can find information about Vega here: https://datahub.io/docs/features/views#vega-graphs

## Maintenance

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

First of all, install dependencies:

`npm install` or `yarn`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Build the app for production into a single file `/build/static/js/main.js`.
