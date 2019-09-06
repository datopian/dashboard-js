"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactVega = _interopRequireDefault(require("react-vega"));

var _reactSpinkit = _interopRequireDefault(require("react-spinkit"));

var dprender = _interopRequireWildcard(require("datapackage-render"));

var _useDatasetLoader = _interopRequireDefault(require("./hooks/useDatasetLoader"));

var _Figure = _interopRequireDefault(require("./Figure.js"));

require("./Widget.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Widget(props) {
  var datasets = (0, _useDatasetLoader.default)(props.widget.view.resources[0].datasetId);
  var dataset = datasets.find(function (dataset) {
    return dataset.descriptor.name === props.widget.view.resources[0].datasetId;
  });

  if (dataset) {
    var compiledView = dprender.compileView(props.widget.view, dataset.descriptor);

    if (props.widget.view.specType === 'vega') {
      var vegaSpec = dprender.vegaToVega(compiledView);

      if (vegaSpec) {
        return _react.default.createElement(_reactVega.default, {
          spec: vegaSpec
        });
      }
    } else if (props.widget.view.specType === 'figure') {
      return _react.default.createElement(_Figure.default, {
        compiledView: compiledView
      });
    }
  }

  return _react.default.createElement(_reactSpinkit.default, {
    name: "ball-beat"
  });
}

var _default = Widget;
exports.default = _default;