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

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
