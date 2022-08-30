"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/', _index["default"]);
var _default = app;
exports["default"] = _default;
var a = {
  schemeName: "sample scheme",
  trusteeName: {
    text: "sample trustee",
    styles: {
      fontcolor: "",
      fontSize: 3
    }
  },
  imageOne: {
    url: "../1.png",
    dimentions: {
      left: 1,
      top: 1,
      height: 3,
      width: 8
    }
  },
  sample_data_1: {
    data: [{
      name: "Kamal",
      age: 12
    }, {
      name: "Amal",
      age: 22
    }, {
      name: "Nuwan",
      age: 32
    }],
    textStyles: {
      fontcolor: "",
      fontSize: 3
    }
  },
  cashFlows: {
    headers: ["cashflow year", "cashflow fixed", "cashflow real"],
    row_count: 10,
    colum_count: 3,
    table_count_per_slide: 4,
    styles: {
      top: 1,
      width: 0.6,
      row_height: 0.04
    },
    rows: [{
      "cashflow_year": "2020",
      "cashflow_fixed": "1",
      "cashflow_real": "123123"
    }, {
      "cashflow_year": "2020",
      "cashflow_fixed": "2",
      "cashflow_real": "123123"
    }, {
      "cashflow_year": "2020",
      "cashflow_fixed": "3",
      "cashflow_real": "123123"
    }, {
      "cashflow_year": "2020",
      "cashflow_fixed": "4",
      "cashflow_real": "123123"
    }]
  },
  dataTable_rowName: False,
  dataTtable_columnName: False,
  dataFetch: {
    scheme: ["scheme_data"],
    analytics: ["r1b", "c1"],
    charts: ["assets", "liabilities"]
  }
};