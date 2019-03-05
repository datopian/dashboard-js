**dashboard-js** is a lightweight javascript library built for quickly creating dashboards using data packaged data sources. If you need to visualize and present data in a convenient way and you need to do that fast then **dashboard-js** is a library for you. There are many advantages to dashboard-js:

* It requires only basic knowledge of HTML, CSS
* It's modular and extendable through the use of widgets
* It's lightweight, fast to include and to begin with


## Getting started

### Installation

Simply import bundled **dashboard-js** code inside of your HTML file:

```javascript
<script type="text/javascript" src="https://combinatronics.com/datopian/dashboard-js/master/build/static/js/main.js"></script>
```

### Setup your Dashboard

Your dashboard will consist of one or more widgets. You'll need to have placeholder element for each widget and reference it by `id` in the `config`:

```html
<div id='testWidget'></div>
```

### Widget configuration

To start working with widgets you need to set up `config` global variable available from `window.config` where you can specify how the dashboard should be rendered:

```js
var config = {
  widgets: [...],
  datasets: [...]
}
```

* `widgets` - a list of objects where each object contains information about where a widget should be injected and how it should look like.
* `datasets` - a list of dataset URLs.

A standard widget object should have the following structure:

```
{
  "elementId": "testWidget",
  "view": {
    "title": "",
    "legend": "",
    "footer": "",
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
  * `title`, `legend`, `footer` - these are optional metadata.
  * `resources` - a list of resources needed for a widget and required manipulations (transforms).
  	* `datasetId` - the id (name) of the dataset from which the resource is extracted.
  	* `name` - name of the resource.
  	* `transform` - transformations required for a resource.
  * `specType` - type of a widget, e.g., `vega` or `figure`.
  * `spec` - specification for selected widget type.

#### Figure widget

A specification for "Figure widget" would have the following structure:

```
{
  "fieldName": "",
  "suffix": "",
  "prefix": ""
}
```

where "suffix" and "prefix" attributes are optional. The "fieldName" attribute will be used to extract specific value from a row. In this example we extract the latest data and display it as a "Figure" widget - https://github.com/datopian/dashboard-js/tree/master/example.

#### Vega widget

You can find information about Vega here: https://datahub.io/docs/features/views#vega-graphs

### Example

You can find basic example of how to use **dashboard-js** here - https://github.com/datopian/dashboard-js/tree/master/example

### More complex example

One of the good examples of projects built using dashboard-js is the [London - City Dashboard](https://london.datahub.io/) a free and open data-sharing portal where anyone can access data related to London. See the code here - https://github.com/datahq/city-indicators.

![](https://i.imgur.com/JoGMc3W.png)

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
