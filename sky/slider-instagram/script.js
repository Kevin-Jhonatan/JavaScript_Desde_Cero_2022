"use strict";

var _react = _interopRequireWildcard(require("https://cdn.skypack.dev/react"));
var _reactDom = _interopRequireDefault(
  require("https://cdn.skypack.dev/react-dom")
);
var _ti = require("https://cdn.skypack.dev/react-icons/ti");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const CARDS = 10;
const MAX_VISIBILITY = 3;
const Card = ({ title, content }) =>
  /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "card",
    },
    /*#__PURE__*/ _react.default.createElement("h2", null, title),
    /*#__PURE__*/ _react.default.createElement("p", null, content)
  );
const Carousel = ({ children }) => {
  const [active, setActive] = (0, _react.useState)(2);
  const count = _react.default.Children.count(children);
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "carousel",
    },
    active > 0 &&
      /*#__PURE__*/ _react.default.createElement(
        "button",
        {
          className: "nav left",
          onClick: () => setActive((i) => i - 1),
        },
        /*#__PURE__*/ _react.default.createElement(
          _ti.TiChevronLeftOutline,
          null
        )
      ),
    _react.default.Children.map(children, (child, i) =>
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "card-container",
          style: {
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          },
        },
        child
      )
    ),
    active < count - 1 &&
      /*#__PURE__*/ _react.default.createElement(
        "button",
        {
          className: "nav right",
          onClick: () => setActive((i) => i + 1),
        },
        /*#__PURE__*/ _react.default.createElement(
          _ti.TiChevronRightOutline,
          null
        )
      )
  );
};
const App = () =>
  /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "app",
    },
    /*#__PURE__*/ _react.default.createElement(
      Carousel,
      null,
      [...new Array(CARDS)].map((_, i) =>
        /*#__PURE__*/ _react.default.createElement(Card, {
          title: "Card " + (i + 1),
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        })
      )
    )
  );
_reactDom.default.render(
  /*#__PURE__*/ _react.default.createElement(App, null),
  document.body
);
