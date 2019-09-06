"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Figure(props) {
  var fieldName = props.compiledView.spec.fieldName;
  var output = '-';

  if (props.compiledView.resources[0]._values[0]) {
    // We expect that after transformation, the `_values` array will have single row:
    var values = props.compiledView.resources[0]._values[0]; // Flatten the values:

    Object.keys(values).forEach(function (key) {
      var value = values[key];

      if (value.constructor.name === 'Object') {
        Object.keys(value).forEach(function (anotherKey) {
          values[anotherKey] = value[anotherKey];
        });
      }
    }); // Take the value we need:

    output = values[fieldName]; // If it's a number, use only 1 decimal place:

    if (!isNaN(output)) {
      output = parseFloat(output).toFixed(1).toString();
    }
  }

  var prefix = props.compiledView.spec.prefix || '';
  var suffix = props.compiledView.spec.suffix || '';
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h2", null, props.compiledView.title), _react.default.createElement("div", {
    className: "info"
  }, _react.default.createElement("span", null, prefix + output + suffix), _react.default.createElement("br", null), _react.default.createElement("h4", null, props.compiledView.legend)), _react.default.createElement("p", null, props.compiledView.footer));
}

var _default = Figure;
exports.default = _default;