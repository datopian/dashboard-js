"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _Widget = _interopRequireDefault(require("./Widget"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Read 'config' from global variable:
var config = window.config;

if (config) {
  // Render widgets:
  config.widgets.forEach(function (widget) {
    _reactDom.default.render(_react.default.createElement(_Widget.default, {
      widget: widget
    }), document.getElementById(widget.elementId));
  });
} else {
  _reactDom.default.render(_react.default.createElement("div", null, "'Missing \"config\" global variable. Please, refer to README.'"), document.getElementById('root'));
} // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


serviceWorker.unregister();