"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Widget = _interopRequireDefault(require("./Widget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render(_react.default.createElement(_Widget.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});