"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _ItemTypes = _interopRequireDefault(require("../ItemTypes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var style = {
  cursor: 'move'
};

var DragHandle = function DragHandle(props) {
  var data = props.data,
      index = props.index,
      onDestroy = props.onDestroy,
      setAsChild = props.setAsChild,
      getDataById = props.getDataById;

  var _useDrag = (0, _reactDnd.useDrag)({
    type: _ItemTypes["default"].BOX,
    item: function item() {
      return {
        itemType: _ItemTypes["default"].BOX,
        index: data.parentId ? -1 : index,
        parentIndex: data.parentIndex,
        id: data.id,
        col: data.col,
        onDestroy: onDestroy,
        setAsChild: setAsChild,
        getDataById: getDataById,
        data: data
      };
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    }
  }),
      _useDrag2 = (0, _slicedToArray2["default"])(_useDrag, 3),
      dragRef = _useDrag2[1],
      dragPreviewRef = _useDrag2[2]; // Use empty image as drag preview


  (0, _react.useEffect)(function () {
    dragPreviewRef((0, _reactDndHtml5Backend.getEmptyImage)(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true
    });
  }, [dragPreviewRef]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: dragRef,
    className: "btn is-isolated",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "is-isolated fas fa-grip-vertical"
  }));
};

var _default = DragHandle;
exports["default"] = _default;