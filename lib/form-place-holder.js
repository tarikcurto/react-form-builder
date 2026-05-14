"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = (0, _getPrototypeOf2["default"])(t); if (r) { var s = (0, _getPrototypeOf2["default"])(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return (0, _possibleConstructorReturn2["default"])(this, e); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var PLACE_HOLDER = 'form-place-holder';
var PLACE_HOLDER_HIDDEN = 'form-place-holder-hidden';
var PlaceHolder = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PlaceHolder, _React$Component);
  var _super = _createSuper(PlaceHolder);
  function PlaceHolder() {
    (0, _classCallCheck2["default"])(this, PlaceHolder);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(PlaceHolder, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var placeHolderClass = this.props.show ? PLACE_HOLDER : PLACE_HOLDER_HIDDEN;
      // eslint-disable-next-line no-nested-ternary
      var placeHolder = this.props.show ? this.props.text === 'Dropzone' ? intl.formatMessage({
        id: 'drop-zone'
      }) : this.props.text : '';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: placeHolderClass
      }, /*#__PURE__*/_react["default"].createElement("div", null, placeHolder));
    }
  }]);
  return PlaceHolder;
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(PlaceHolder);
PlaceHolder.propTypes = {
  text: _propTypes["default"].string,
  show: _propTypes["default"].bool
};
PlaceHolder.defaultProps = {
  text: 'Dropzone',
  show: false
};