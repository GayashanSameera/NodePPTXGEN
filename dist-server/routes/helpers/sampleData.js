"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devSlide01 = devSlide01;
exports.devSlide02 = devSlide02;
exports.devSlide03 = devSlide03;
exports.devSlide04 = devSlide04;
exports.devSlide05 = devSlide05;
exports.genSlide01 = genSlide01;
exports.genSlide02 = genSlide02;
exports.genSlide03 = genSlide03;
exports.genSlide04 = genSlide04;
exports.genSlide05 = genSlide05;
exports.genSlide06 = genSlide06;
exports.genSlide07 = genSlide07;
exports.genSlide08 = genSlide08;
exports.genSlide09 = genSlide09;
exports.genSlide10 = genSlide10;
exports.genSlide11 = genSlide11;
exports.genSlide12 = genSlide12;
exports.genSlide13 = genSlide13;
exports.genSlide14 = genSlide14;
exports.genSlide15 = genSlide15;
exports.genSlide16 = genSlide16;
exports.genSlide17 = genSlide17;
exports.genSlide18 = genSlide18;
exports.genSlide19 = genSlide19;
exports.genSlide20 = genSlide20;
exports.genSlide21 = genSlide21;
exports.genSlides_Chart = genSlides_Chart;

var _enums = require("./enums");

var _enums_charts = require("./enums_charts");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function genSlides_Chart(pptx) {
  pptx.addSection({
    title: "Charts"
  });
  genSlide01(pptx);
  genSlide02(pptx);
  genSlide03(pptx);
  genSlide04(pptx);
  genSlide05(pptx);
  genSlide06(pptx);
  genSlide07(pptx);
  genSlide08(pptx);
  genSlide09(pptx);
  genSlide10(pptx);
  genSlide11(pptx);
  genSlide12(pptx);
  genSlide13(pptx);
  genSlide14(pptx);
  genSlide15(pptx);
  genSlide16(pptx);
  genSlide17(pptx);
  genSlide18(pptx);
  genSlide19(pptx);
  genSlide20(pptx);
  genSlide21(pptx);

  if (_enums.TESTMODE) {
    pptx.addSection({
      title: "Charts-DevTest"
    });
    devSlide01(pptx);
    devSlide02(pptx);
    devSlide03(pptx);
    devSlide04(pptx);
    devSlide05(pptx);
  }
} // SLIDE 1: Bar Chart


function genSlide01(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: " Multiple Chart Example",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Region 1",
    labels: ["May", "June", "July", "August"],
    values: [26, 53, 100, 75]
  }, {
    name: "Region 2",
    labels: ["May", "June", "July", "August"],
    values: [43.5, 70.3, 90.1, 80.05]
  }];
  var arrDataHighVals = [{
    name: "California",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [2000, 2800, 3200, 4000, 5000]
  }, {
    name: "Texas",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [1400, 2000, 2500, 3000, 3800]
  }];
  var arrDataSersCats = [{
    name: "Series 1",
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    values: [4.3, 2.5, 3.5, 4.5]
  }, {
    name: "Series 2",
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    values: [2.4, 4.4, 1.8, 2.8]
  }, {
    name: "Series 3",
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    values: [2, 2, 3, 5]
  }]; // TOP-LEFT: H/bar

  var optsChartBar1 = {
    x: 0.5,
    y: 0.6,
    w: 4.0,
    h: 2.0,
    chartArea: {
      border: {
        color: _enums_charts.COLORS_SPECTRUM[0],
        pt: 1
      }
    },
    //chartArea: { fill: { color: pptx.colors.BACKGROUND2 } },
    //plotArea: { fill: { color: pptx.colors.BACKGROUND1 }, border: { color: pptx.colors.BACKGROUND2, pt: 1 } },
    chartColors: _enums_charts.COLORS_SPECTRUM,
    objectName: "bar chart (top L)",
    altText: "this is the alt text content",
    barDir: "bar",
    catAxisLabelColor: _enums_charts.ACCENT_COLORS[0],
    catAxisLabelFontFace: "Helvetica Neue",
    catAxisLabelFontSize: 12,
    catAxisOrientation: "maxMin",
    catAxisMajorTickMark: "in",
    catAxisMinorTickMark: "cross",
    valAxisMajorTickMark: "cross",
    valAxisMinorTickMark: "out" //valAxisLabelColor: ACCENT_COLORS[0],
    //valAxisCrossesAt: 100,

  };
  slide.addChart(pptx.charts.BAR, arrDataSersCats, optsChartBar1); // TOP-RIGHT: V/col

  var optsChartBar2 = {
    x: 5.0,
    y: 0.6,
    w: 4.0,
    h: 2.0,
    chartArea: {
      border: {
        color: _enums_charts.COLORS_SPECTRUM[0],
        pt: 1
      }
    },
    //chartArea: { fill: { color: pptx.colors.BACKGROUND2 } },
    //plotArea: { fill: { color: pptx.colors.BACKGROUND1 }, border: { color: pptx.colors.BACKGROUND2, pt: 1 } },
    chartColors: _enums_charts.COLORS_SPECTRUM,
    objectName: "bar chart (top R)",
    barDir: "col",
    catAxisLabelColor: _enums_charts.ACCENT_COLORS[0],
    catAxisLabelFontFace: "Arial",
    catAxisLabelFontSize: 11,
    catAxisOrientation: "minMax",
    catAxisMajorTickMark: "none",
    catAxisMinorTickMark: "none",
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    dataLabelColor: _enums_charts.ACCENT_COLORS[0],
    dataLabelFontFace: "Courier",
    dataLabelFontSize: 10,
    dataLabelPosition: "outEnd",
    dataLabelFormatCode: "#.0",
    showValue: true,
    valAxisLabelColor: _enums_charts.ACCENT_COLORS[0],
    valAxisOrientation: "maxMin",
    valAxisMajorTickMark: "none",
    valAxisMinorTickMark: "none",
    //valAxisLogScaleBase: '25',
    showLegend: false,
    showTitle: false
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar2); // BTM-LEFT: H/bar - TITLE and LEGEND

  var optsChartBar3 = {
    x: 0.4,
    y: 3.0,
    w: 4,
    h: 2,
    barDir: "bar",
    chartArea: {
      fill: {
        color: pptx.colors.BACKGROUND2
      },
      border: {
        color: pptx.colors.ACCENT3,
        pt: 2
      }
    },
    //chartArea: { fill: { color: pptx.colors.BACKGROUND2 } },
    //chartArea: { fill: { color: "F1F1F1", transparency: 75 } },
    //chartArea: { fill: { color: "F1F1F1" } },
    plotArea: {
      fill: {
        color: "F2F9FC"
      }
    },
    //plotArea: { border: { pt: "3", color: "CF0909" }, fill: { color: "F1C1C1" } },
    //plotArea: { border: { pt: "3", color: "CF0909" }, fill: { color: "F1C1C1", transparency: 10 } },
    catAxisLabelColor: "CC0000",
    catAxisLabelFontFace: "Helvetica Neue",
    catAxisLabelFontSize: 14,
    catAxisOrientation: "minMax",
    titleColor: "33CF22",
    titleFontFace: "Helvetica Neue",
    titleFontSize: 16,
    showTitle: true,
    title: "Sales by Region"
  };
  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar3); // BTM-RIGHT: V/col - TITLE and LEGEND

  var optsChartBar4 = {
    x: 5,
    y: 2.5,
    w: 4,
    h: 3,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    plotArea: {
      fill: {
        color: "404040"
      }
    },
    //
    barDir: "col",
    barGapWidthPct: 25,
    chartColors: _enums_charts.ACCENT_COLORS,
    chartColorsOpacity: 50,
    //
    catAxisLabelColor: _enums_charts.ACCENT_COLORS[0],
    catAxisLabelFontFace: "Calibri",
    catAxisLabelFontSize: 11,
    catAxisOrientation: "maxMin",
    //
    valAxisMaxVal: 5000,
    valAxisLabelColor: _enums_charts.ACCENT_COLORS[0],
    //
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    dataLabelColor: "FFFFFF",
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 10,
    dataLabelPosition: "ctr",
    showValue: true,
    //
    showLegend: false,
    legendPos: "b",
    legendColor: _enums_charts.ACCENT_COLORS[1],
    //
    showTitle: true,
    title: "Rent Prices",
    titleColor: _enums_charts.ACCENT_COLORS[0]
  };
  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar4);
} // SLIDE 2: Bar Chart: Grid/Axis Options


function genSlide02(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Bar Chart Grid/Axis Options",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Region 1",
    labels: ["May", "June", "July", "August"],
    values: [26, 53, 100, 75]
  }, {
    name: "Region 2",
    labels: ["May", "June", "July", "August"],
    values: [43.5, 70.3, 90.1, 80.05]
  }];
  var arrDataHighVals = [{
    name: "California",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [2000, 2800, 3200, 4000, 5000]
  }, {
    name: "Texas",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [1400, 2000, 2500, 3000, 3800]
  }]; // TOP-LEFT: H/bar

  var optsChartBar1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    barDir: "bar",
    plotArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    catAxisLabelColor: "CC0000",
    catAxisLabelFontFace: "Helvetica Neue",
    catAxisLabelFontSize: 14,
    catGridLine: {
      style: "none"
    },
    catAxisHidden: true,
    valGridLine: {
      color: "cc6699",
      style: "dash",
      size: 1
    },
    valAxisLineColor: "44AA66",
    valAxisLineSize: 1,
    valAxisLineStyle: "dash",
    showLegend: true,
    showTitle: true,
    title: "catAxisHidden:true, valGridLine/valAxisLine:dash",
    titleColor: "a9a9a9",
    titleFontFace: "Helvetica Neue",
    titleFontSize: 14
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar1); // TOP-RIGHT: V/col

  var optsChartBar2 = {
    x: 7.0,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    barDir: "col",
    plotArea: {
      fill: {
        color: "E1F1FF"
      }
    },
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    dataLabelColor: "696969",
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 11,
    dataLabelPosition: "outEnd",
    dataLabelFormatCode: "#.0",
    showValue: true,
    catAxisHidden: true,
    catGridLine: {
      style: "none"
    },
    valAxisHidden: true,
    valAxisDisplayUnitLabel: true,
    valGridLine: {
      style: "none"
    },
    showLegend: true,
    legendPos: "b",
    showTitle: false
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar2); // BTM-LEFT: H/bar - TITLE and LEGEND

  var optsChartBar3 = {
    x: 0.5,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    plotArea: {
      border: {
        pt: "3",
        color: "CF0909"
      },
      fill: {
        color: "F1C1C1"
      }
    },
    barDir: "bar",
    barOverlapPct: -50,
    catAxisLabelColor: "CC0000",
    catAxisLabelFontFace: "Helvetica Neue",
    catAxisLabelFontSize: 14,
    catAxisOrientation: "maxMin",
    catAxisTitle: "Housing Type",
    catAxisTitleColor: "428442",
    catAxisTitleFontSize: 14,
    showCatAxisTitle: true,
    catGridLine: {
      color: "cc6699",
      style: "dash",
      size: 1
    },
    valGridLine: {
      style: "none"
    },
    valAxisOrientation: "maxMin",
    valAxisHidden: true,
    valAxisDisplayUnitLabel: true,
    titleColor: "33CF22",
    titleFontFace: "Helvetica Neue",
    titleFontSize: 16,
    showTitle: true,
    title: "Sales by Region"
  };
  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar3); // BTM-RIGHT: V/col - TITLE and LEGEND

  var optsChartBar4 = {
    x: 7.0,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    barDir: "col",
    barGapWidthPct: 25,
    chartColors: ["0088CC", "99FFCC"],
    chartColorsOpacity: 50,
    valAxisMinVal: 1000,
    valAxisMaxVal: 5000,
    catAxisLabelColor: "0000CC",
    catAxisLabelFontFace: "Times",
    catAxisLabelFontSize: 11,
    catAxisLabelFrequency: 1,
    catAxisOrientation: "minMax",
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    dataLabelColor: "FFFFFF",
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 10,
    dataLabelPosition: "ctr",
    showValue: true,
    valAxisHidden: true,
    catAxisTitle: "Housing Type",
    showCatAxisTitle: true,
    showLegend: false,
    showTitle: false
  };
  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar4);
} // SLIDE 3: Bar Chart: Stacked


function genSlide03(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Bar Chart: Stacked/PercentStacked and Data Table",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Region 3",
    labels: ["April", "May", "June", "July", "August"],
    values: [17, 26, 53, 100, 75]
  }, {
    name: "Region 4",
    labels: ["April", "May", "June", "July", "August"],
    values: [55, 43, 70, 90, 80]
  }];
  var arrDataHighVals = [{
    name: "California",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [2000, 2800, 3200, 4000, 5000]
  }, {
    name: "Texas",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [1400, 2000, 2500, 3000, 3800]
  }]; // TOP-LEFT: H/bar

  var optsChartBar1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    barDir: "bar",
    barGrouping: "stacked",
    catAxisOrientation: "maxMin",
    catAxisLabelColor: "CC0000",
    catAxisLabelFontFace: "Helvetica Neue",
    catAxisLabelFontSize: 14,
    catAxisLabelFontBold: true,
    valAxisLabelFontBold: true,
    dataLabelColor: "FFFFFF",
    showValue: true,
    titleColor: "33CF22",
    titleFontFace: "Helvetica Neue",
    titleFontSize: 24
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar1); // TOP-RIGHT: V/col

  var optsChartBar2 = {
    x: 7.0,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    barDir: "col",
    barGrouping: "stacked",
    dataLabelColor: "FFFFFF",
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 12,
    dataLabelFontBold: true,
    showValue: true,
    catAxisLabelColor: "0000CC",
    catAxisLabelFontFace: "Courier",
    catAxisLabelFontSize: 12,
    catAxisOrientation: "minMax",
    showLegend: false,
    showTitle: false
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar2); // BTM-LEFT: H/bar - 100% layout without axis labels

  var optsChartBar3 = {
    x: 0.5,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    barDir: "bar",
    barGrouping: "percentStacked",
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    catAxisHidden: true,
    valAxisHidden: true,
    showTitle: false,
    layout: {
      x: 0.1,
      y: 0.1,
      w: 1,
      h: 1
    },
    showDataTable: true,
    showDataTableKeys: true,
    showDataTableHorzBorder: false,
    showDataTableVertBorder: false,
    showDataTableOutline: false,
    dataTableFontSize: 10
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar3); // BTM-RIGHT: V/col - TITLE and LEGEND

  var optsChartBar4 = {
    x: 7.0,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    barDir: "col",
    barGrouping: "percentStacked",
    catAxisLabelColor: "0000CC",
    catAxisLabelFontFace: "Times",
    catAxisLabelFontSize: 12,
    catAxisOrientation: "minMax",
    chartColors: ["5DA5DA", "FAA43A"],
    showLegend: true,
    legendPos: "t",
    showDataTable: true,
    showDataTableKeys: false,
    dataTableFormatCode: "$#" //dataTableFormatCode: '0.00%' // @since v3.3.0
    //dataTableFormatCode: '$0.00' // @since v3.3.0

  };
  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar4);
} // SLIDE 4: Bar Chart: Title Options, Inverted Colors


function genSlide04(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Title Options; invertedColors",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataHighVals = [{
    name: "Series With Negative Values",
    labels: ["N2", "N1", "ZERO", "P1", "P2", "P3", "P4", "P5", "P6", "P7"],
    values: [-5, -3, 0, 3, 5, 6, 7, 8, 9, 10]
  }];
  var optsChart = {
    x: 0.5,
    y: 0.5,
    w: "90%",
    h: "90%",
    barDir: "col",
    //
    showTitle: true,
    title: "Rotated Title",
    titleFontSize: 20,
    titleRotate: 10,
    //
    showLegend: true,
    chartColors: ["00B050"],
    invertedColors: ["C0504D"],
    //
    showCatAxisTitle: true,
    catAxisTitle: "Cat Axis Title",
    catAxisTitleColor: "4286f4",
    catAxisTitleFontSize: 14,
    //
    showValAxisTitle: true,
    valAxisTitle: "Val Axis Title",
    valAxisTitleColor: "c11c13",
    valAxisTitleFontSize: 16
  }; // TEST `getExcelColName()` to ensure Excel Column names are generated correctly above >26 chars/cols

  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChart);
} // SLIDE 5: Bar Chart: Data Series Colors, majorUnits, and valAxisLabelFormatCode


function genSlide05(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Multi-Color Bars, `catLabelFormatCode`, `valAxisDisplayUnit`, `valAxisMajorUnit`, `valAxisLabelFormatCode`",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS); // TOP-LEFT

  slide.addChart(pptx.charts.BAR, [{
    name: "Excel Date Values",
    labels: [37987, 38018, 38047, 38078, 38108, 38139],
    values: [20, 30, 10, 25, 15, 5]
  }], {
    x: 0.5,
    y: 0.6,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    barDir: "bar",
    chartColors: ["0077BF", "4E9D2D", "ECAA00", "5FC4E3", "DE4216", "154384"],
    //
    catAxisLabelColor: "F1F1F1",
    catLabelFormatCode: "yyyy-mm",

    /*
    valAxisLabelColor: "F1F1F1",
    valAxisMajorUnit: 15,
    valAxisDisplayUnit: "hundreds",
    valAxisMaxVal: 45,
    valLabelFormatCode: "$0", // @since v3.3.0
    */
    valAxisHidden: true,
    //
    showTitle: true,
    title: "Categories can be Multi-Color",
    titleColor: "0088CC",
    titleFontSize: 14
  }); // TOP-RIGHT
  // NOTE: Labels are ppt/excel dates (days past 1900)

  slide.addChart(pptx.charts.BAR, [{
    name: "Too Many Colors Series",
    labels: [37987, 38018, 38047, 38078, 38108, 38139],
    values: [0.2, 0.3, 0.1, 0.25, 0.15, 0.05]
  }], {
    x: 7,
    y: 0.6,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    catAxisLabelColor: "F1F1F1",
    valAxisLabelColor: "F1F1F1",
    valAxisLineColor: "7F7F7F",
    valGridLine: {
      color: "7F7F7F"
    },
    dataLabelColor: "B7B7B7",
    valAxisMaxVal: 1,
    barDir: "bar",
    catAxisLineShow: false,
    showValue: true,
    catLabelFormatCode: "mmm-yy",
    dataLabelPosition: "outEnd",
    dataLabelFormatCode: "#%",
    valAxisLabelFormatCode: "#%",
    valAxisMajorUnit: 0.2,
    chartColors: ["0077BF", "4E9D2D", "ECAA00", "5FC4E3", "DE4216", "154384", "7D666A", "A3C961", "EF907B", "9BA0A3"],
    barGapWidthPct: 25
  }); // BOTTOM-LEFT

  slide.addChart(pptx.charts.BAR, [{
    name: "Two Color Series",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [0.2, -0.3, -0.1, 0.25, 0.15, 0.05]
  }], {
    x: 0.5,
    y: 4.0,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    catAxisLabelColor: "F1F1F1",
    valAxisLabelColor: "F1F1F1",
    valAxisLineColor: "7F7F7F",
    valGridLine: {
      color: "7F7F7F"
    },
    dataLabelColor: "B7B7B7",
    valAxisHidden: true,
    barDir: "col",
    // `col`(vert) | `bar`(horiz)
    showValue: true,
    dataLabelPosition: "outEnd",
    dataLabelFormatCode: "#%",
    valAxisLabelFormatCode: "0.#0",
    chartColors: ["0077BF", "4E9D2D", "ECAA00", "5FC4E3", "DE4216", "154384", "7D666A", "A3C961", "EF907B", "9BA0A3"],
    valAxisMaxVal: 0.4,
    barGapWidthPct: 50,
    showLegend: true,
    legendPos: "r",
    legendColor: "F1F1F1"
  }); // BOTTOM-RIGHT

  slide.addChart(pptx.charts.BAR, [{
    name: "EV",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [102, 103, 121, 125, 135, 155]
  }, {
    name: "ICE",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [150, 153, 151, 125, 115, 105]
  }], {
    x: 7,
    y: 4,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    barDir: "bar",
    catAxisLabelColor: "F1F1F1",
    valAxisLabelColor: "F1F1F1",
    valAxisLineColor: "7F7F7F",
    valGridLine: {
      color: "7F7F7F"
    },
    dataLabelColor: "B7B7B7",
    chartColorsOpacity: 50,
    //showValue: true,
    //dataLabelPosition: "outEnd",
    chartColors: ["0077BF", "4E9D2D", "ECAA00", "5FC4E3", "DE4216", "154384", "7D666A", "A3C961", "EF907B", "9BA0A3"],
    barGapWidthPct: 25,
    catAxisOrientation: "maxMin",
    valAxisOrientation: "maxMin",
    valAxisMaxVal: 200,
    valAxisMajorUnit: 25
  });
} // SLIDE 6: 3D Bar Chart


function genSlide06(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: 3D Bar Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Region 1",
    labels: ["May", "June", "July", "August"],
    values: [26, 53, 100, 75]
  }, {
    name: "Region 2",
    labels: ["May", "June", "July", "August"],
    values: [43.5, 70.3, 90.1, 80.05]
  }];
  var arrDataHighVals = [{
    name: "California",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [2000, 2800, 3200, 4000, 5000]
  }, {
    name: "Texas",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [1400, 2000, 2500, 3000, 3800]
  }]; // TOP-LEFT: H/bar

  var optsChartBar1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1",
        transparency: 50
      }
    },
    barDir: "bar",
    //
    catAxisLabelColor: pptx.colors.ACCENT2,
    catAxisLabelFontFace: "Arial",
    catAxisLabelFontSize: 10,
    catAxisOrientation: "maxMin",
    //
    serAxisLabelColor: pptx.colors.ACCENT4,
    serAxisLabelFontFace: "Arial",
    serAxisLabelFontSize: 10,
    serAxisLineColor: pptx.colors.ACCENT6,
    //
    valAxisHidden: true
  };
  slide.addChart(pptx.charts.BAR3D, arrDataRegions, optsChartBar1); // TOP-RIGHT: V/col

  var optsChartBar2 = {
    x: 7.0,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1",
        transparency: 50
      }
    },
    barDir: "col",
    bar3DShape: "cylinder",
    catAxisLabelColor: "0000CC",
    catAxisLabelFontFace: "Courier",
    catAxisLabelFontSize: 12,
    dataLabelColor: "000000",
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 11,
    dataLabelPosition: "outEnd",
    dataLabelFormatCode: "#.0",
    dataLabelBkgrdColors: true,
    showValue: true
  };
  slide.addChart(pptx.charts.BAR3D, arrDataRegions, optsChartBar2); // BTM-LEFT: H/bar - TITLE and LEGEND

  var optsChartBar3 = {
    x: 0.5,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    chartArea: {
      fill: {
        color: "F1F1F1",
        transparency: 50
      }
    },
    barDir: "col",
    bar3DShape: "pyramid",
    barGrouping: "stacked",
    catAxisLabelColor: "CC0000",
    catAxisLabelFontFace: "Arial",
    catAxisLabelFontSize: 10,
    showValue: true,
    dataLabelBkgrdColors: true,
    showTitle: true,
    title: "Sales by Region"
  };
  slide.addChart(pptx.charts.BAR3D, arrDataHighVals, optsChartBar3); // BTM-RIGHT: V/col - TITLE and LEGEND

  var optsChartBar4 = {
    x: 7.0,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    chartArea: {
      fill: {
        color: "F1F1F1",
        transparency: 50
      }
    },
    barDir: "col",
    bar3DShape: "coneToMax",
    chartColors: ["0088CC", "99FFCC"],
    catAxisLabelColor: "0000CC",
    catAxisLabelFontFace: "Times",
    catAxisLabelFontSize: 11,
    catAxisOrientation: "minMax",
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    dataLabelColor: "000000",
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 10,
    dataLabelPosition: "ctr",
    showLegend: true,
    legendPos: "t",
    legendColor: "FF0000",
    showTitle: true,
    titleColor: "FF0000",
    title: "Red Title and Legend"
  };
  slide.addChart(pptx.charts.BAR3D, arrDataHighVals, optsChartBar4);
} // SLIDE 7: Tornado Chart


function genSlide07(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Tornado Chart - Grid and Axis Formatting",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  slide.addChart(pptx.charts.BAR, [{
    name: "High",
    labels: ["London", "Munich", "Tokyo"],
    values: [0.2, 0.32, 0.41]
  }, {
    name: "Low",
    labels: ["London", "Munich", "Tokyo"],
    values: [-0.11, -0.22, -0.29]
  }], {
    x: 0.5,
    y: 0.5,
    w: "90%",
    h: "90%",
    chartArea: {
      fill: {
        color: "F1F1F1",
        transparency: 50
      }
    },
    valAxisMaxVal: 1,
    barDir: "bar",
    axisLabelFormatCode: "#%",
    catGridLine: {
      color: "D8D8D8",
      style: "dash",
      size: 1
    },
    valGridLine: {
      color: "D8D8D8",
      style: "dash",
      size: 1
    },
    catAxisLineShow: false,
    valAxisLineShow: false,
    barGrouping: "stacked",
    catAxisLabelPos: "low",
    valueBarColors: true,
    shadow: {
      type: "none"
    },
    chartColors: ["0077BF", "4E9D2D", "ECAA00", "5FC4E3", "DE4216", "154384", "7D666A", "A3C961", "EF907B", "9BA0A3"],
    invertedColors: ["0065A2", "428526", "C99100", "51A7C1", "BD3813", "123970", "6A575A", "8BAB52", "CB7A69", "84888B"],
    barGapWidthPct: 25,
    valAxisMajorUnit: 0.2
  });
} // SLIDE 8: Line Chart


function genSlide08(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Line Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  slide.addText("(".concat(_enums_charts.CHART_DATA.LongTermIntRates.sourceUrl, ")"), _enums.FOOTER_TEXT_OPTS); // FULL SLIDE:

  var OPTS_CHART = {
    x: 0.5,
    y: 0.6,
    w: "95%",
    h: "85%",
    plotArea: {
      fill: {
        color: "F2F9FC"
      }
    },
    //
    showLegend: true,
    legendPos: "r",
    //
    showTitle: true,
    lineDataSymbol: "none",
    title: _enums_charts.CHART_DATA.LongTermIntRates.chartTitle,
    titleColor: "0088CC",
    titleFontFace: "Arial",
    titleFontSize: 18
  };
  slide.addChart(pptx.charts.LINE, _enums_charts.CHART_DATA.LongTermIntRates.chartData, OPTS_CHART);
} // SLIDE 9: Line Chart: Line Smoothing, Line Size, Symbol Size


function genSlide09(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Line Smoothing, Line Size, Line Shadow, Symbol Size",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var optsChartLine1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_RYGU,
    lineSize: 8,
    lineSmooth: true,
    showLegend: true,
    legendPos: "t",
    catAxisLabelPos: "high"
  };
  slide.addChart(pptx.charts.LINE, _enums_charts.arrDataLineStat, optsChartLine1);
  var optsChartLine2 = {
    x: 7.0,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_RYGU,
    lineSize: 16,
    lineSmooth: true,
    showLegend: true,
    legendPos: "r"
  };
  slide.addChart(pptx.charts.LINE, _enums_charts.arrDataLineStat, optsChartLine2);
  var optsChartLine3 = {
    x: 0.5,
    y: 4.0,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_RYGU,
    lineDataSymbolSize: 10,
    shadow: {
      type: "none"
    },
    //displayBlanksAs: 'gap', // NOTE: uncomment only for test - looks broken otherwise!
    showLegend: true,
    legendPos: "l"
  };
  slide.addChart(pptx.charts.LINE, _enums_charts.arrDataLineStat, optsChartLine3); // QA: DEMO: Test shadow option

  var shadowOpts = {
    type: "outer",
    color: "cd0011",
    blur: 3,
    offset: 12,
    angle: 75,
    opacity: 0.8
  };
  var optsChartLine4 = {
    x: 7.0,
    y: 4.0,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_RYGU,
    lineDataSymbolSize: 20,
    shadow: shadowOpts,
    showLegend: true,
    legendPos: "b"
  };
  slide.addChart(pptx.charts.LINE, _enums_charts.arrDataLineStat, optsChartLine4);
} // SLIDE 10: Line Chart: `lineDataSymbol` and `lineDataSymbolSize`


function genSlide10(pptx) {
  var intWgap = 4.25;
  var opts_lineDataSymbol = ["circle", "dash", "diamond", "dot", "none", "square", "triangle"];
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Line Chart: lineDataSymbol options",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  opts_lineDataSymbol.forEach(function (opt, idx) {
    slide.addChart(pptx.charts.LINE, _enums_charts.arrDataLineStat, {
      x: (idx < 3 ? idx * intWgap : idx < 6 ? (idx - 3) * intWgap : (idx - 6) * intWgap) + 0.3,
      y: idx < 3 ? 0.5 : idx < 6 ? 2.85 : 5.1,
      w: 4.25,
      h: 2.25,
      lineDataSymbol: opt,
      lineDataSymbolSize: idx == 5 ? 9 : idx == 6 ? 12 : null,
      chartColors: _enums_charts.COLORS_VIVID,
      title: opt,
      showTitle: true
    });
  });
} // SLIDE 11: Area Chart


function genSlide11(pptx) {
  var _optsChartLine;

  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Area Chart, Stacked Area Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataAreaSm = [{
    name: "Small Samples",
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [15, 46, 31, 85]
  }];
  var arrDataTimeline2ser = [{
    name: "Actual Sales",
    labels: _enums_charts.MONS,
    values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121]
  }, {
    name: "Proj Sales",
    labels: _enums_charts.MONS,
    values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121]
  }]; // TOP-LEFT

  var optsChartLine1 = (_optsChartLine = {
    x: 0.5,
    y: 0.6,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "e9e9e9"
      }
    },
    plotArea: {
      fill: {
        color: "f2f9fc"
      }
    },
    chartColors: _enums_charts.COLORS_VIVID,
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    showTitle: true,
    title: _enums_charts.CHART_DATA.CeoPayRatio_Comp.chartTitle,
    titleFontSize: 11,
    titleColor: "fc0000",
    valAxisLabelFormatCode: "#-1",
    valAxisLabelFontSize: 10,
    valAxisLabelColor: "494949",
    catAxisLabelFontSize: 10,
    catAxisLabelColor: "494949",
    catAxisLabelRotate: 45
  }, _defineProperty(_optsChartLine, "chartColors", ["EF423E"]), _defineProperty(_optsChartLine, "chartColorsOpacity", 25), _optsChartLine);
  slide.addChart(pptx.charts.AREA, _enums_charts.CHART_DATA.CeoPayRatio_Comp.chartData, optsChartLine1); // TOP-RIGHT (stacked area chart)

  var optsChartLine2 = {
    x: 7,
    y: 0.6,
    w: "45%",
    h: 3,
    plotArea: {
      fill: {
        color: "D1E1F1"
      }
    },
    chartColors: ["0088CC", "99FFCC"],
    chartColorsOpacity: 25,
    valAxisLabelRotate: 5,
    dataBorder: {
      pt: 2,
      color: "FFFFFF"
    },
    showValue: false,
    barGrouping: "stacked"
  };
  slide.addChart(pptx.charts.AREA, arrDataTimeline2ser, optsChartLine2); // BOTTOM-LEFT

  var optsChartLine3 = {
    x: 0.5,
    y: 4.0,
    w: "45%",
    h: 3,
    chartColors: ["0088CC", "99FFCC"],
    chartColorsOpacity: 50,
    valAxisLabelFormatCode: "#,K"
  };
  slide.addChart(pptx.charts.AREA, arrDataTimeline2ser, optsChartLine3); // BOTTOM-RIGHT

  var optsChartLine4 = {
    x: 7,
    y: 4.0,
    w: "45%",
    h: 3,
    chartColors: ["CC8833", "CCFF69"],
    chartColorsOpacity: 75
  };
  slide.addChart(pptx.charts.AREA, arrDataTimeline2ser, optsChartLine4);
} // SLIDE 12: Pie Chart


function genSlide12(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Pie Charts: Legends",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS); // TOP-LEFT

  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieStat, {
    x: 0.5,
    y: 0.6,
    w: 4.0,
    h: 3.2,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_RYGU,
    dataBorder: {
      pt: "2",
      color: "F1F1F1"
    },
    //
    legendPos: "l",
    legendFontFace: "Courier New",
    showLegend: true,
    //
    showLeaderLines: true,
    showPercent: false,
    showValue: true,
    dataLabelColor: "FFFFFF",
    dataLabelFontSize: 14,
    dataLabelPosition: "bestFit" // 'bestFit' | 'outEnd' | 'inEnd' | 'ctr'

  }); // TOP-MIDDLE

  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieStat, {
    x: 4.67,
    y: 0.6,
    w: 4.0,
    h: 3.2,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_SPECTRUM,
    showLegend: true,
    legendPos: "t"
  }); // TOP-RIGHT (DEMO: `legendFontSize`, `titleAlign`, `titlePos`)

  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieLocs, {
    x: 8.83,
    y: 0.6,
    w: 4.0,
    h: 3.2,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_SPECTRUM,
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    showLegend: true,
    legendPos: "t",
    legendFontSize: 14,
    showLeaderLines: true,
    showTitle: true,
    title: "Right Title & Large Legend",
    titleAlign: "right",
    titlePos: {
      x: 0,
      y: 0
    }
  }); // BTM-LEFT

  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieLocs, {
    x: 0.5,
    y: 4.0,
    w: 4.0,
    h: 3.2,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: _enums_charts.COLORS_CHART,
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    //
    showValue: true,
    showLabel: true,
    showPercent: true,
    //
    dataLabelColor: "F1F1F1",
    dataLabelFontSize: 10
  }); // BTM-MIDDLE

  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieLocs, {
    x: 4.67,
    y: 4.0,
    w: 4.0,
    h: 3.2,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    chartColors: _enums_charts.COLORS_SPECTRUM,
    dataLabelColor: "F1F1F1",
    showLegend: true,
    legendPos: "b"
  }); // BOTH: BTM-RIGHT

  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieLocs, {
    x: 8.83,
    y: 4.0,
    w: 4.0,
    h: 3.2,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    showLegend: true,
    legendPos: "b",
    showTitle: true,
    title: "Title & Legend",
    firstSliceAng: 90
  });
} // SLIDE 13: Doughnut Chart


function genSlide13(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Doughnut Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var optsChartPie1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 6.4,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    holeSize: 70,
    showLabel: false,
    showValue: false,
    showPercent: true,
    showLegend: true,
    legendPos: "b",
    //
    chartColors: _enums_charts.COLORS_RYGU,
    dataBorder: {
      pt: "2",
      color: "F1F1F1"
    },
    dataLabelColor: "FFFFFF",
    dataLabelFontSize: 14,
    //
    showTitle: false,
    title: "Project Status",
    titleColor: "33CF22",
    titleFontFace: "Helvetica Neue",
    titleFontSize: 24
  };
  slide.addChart(pptx.charts.DOUGHNUT, _enums_charts.dataChartPieStat, optsChartPie1);
  var optsChartPie2 = {
    x: 6.83,
    y: 0.6,
    w: 6.0,
    h: 6.4,
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    chartColors: _enums_charts.COLORS_VIVID,
    dataBorder: {
      pt: "1",
      color: "F1F1F1"
    },
    dataLabelColor: "FFFFFF",
    showLabel: true,
    showValue: true,
    showPercent: true,
    //
    showLegend: true,
    legendPos: "b",
    legendColor: "F1F1F1",
    legendFontSize: 12,
    //
    showTitle: false,
    title: "Resource Totals by Location",
    shadow: {
      type: "inner",
      offset: 20,
      blur: 20
    }
  };
  slide.addChart(pptx.charts.DOUGHNUT, _enums_charts.dataChartPieLocs, optsChartPie2);
} // SLIDE 14: XY Scatter Chart


function genSlide14(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: XY Scatter Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataScatter1 = [{
    name: "X-Axis",
    values: [0, 1, 2, 3, 4, 5]
  }, {
    name: "Y-Value 1",
    values: [90, 80, 70, 85, 75, 92],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  }, {
    name: "Y-Value 2",
    values: [21, 32, 40, 49, 31, 29],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  }];
  var arrDataScatter2 = [{
    name: "X-Axis",
    values: [1, 2, 3, 4, 5, 6]
  }, {
    name: "Airplane",
    values: [33, 20, 51, 65, 71, 75]
  }, {
    name: "Train",
    values: [99, 88, 77, 89, 99, 99]
  }, {
    name: "Bus",
    values: [21, 22, 25, 49, 59, 69]
  }];
  var arrDataScatterLabels = [{
    name: "X-Axis",
    values: [1, 10, 20, 30, 40, 50]
  }, {
    name: "Y-Value 1",
    values: [11, 23, 31, 45, 47, 35],
    labels: ["Red 1", "Red 2", "Red 3", "Red 4", "Red 5", "Red 6"]
  }, {
    name: "Y-Value 2",
    values: [21, 38, 47, 59, 51, 25],
    labels: ["Blue 1", "Blue 2", "Blue 3", "Blue 4", "Blue 5", "Blue 6"]
  }]; // TOP-LEFT

  var optsChartScat1 = {
    x: 0.5,
    y: 0.6,
    w: "45%",
    h: 3,
    valAxisTitle: "Renters",
    valAxisTitleColor: "428442",
    valAxisTitleFontSize: 14,
    showValAxisTitle: true,
    lineSize: 0,
    catAxisTitle: "Last 6 Months",
    catAxisTitleColor: "428442",
    catAxisTitleFontSize: 14,
    showCatAxisTitle: true,
    showLabel: true,
    // Must be set to true or labels will not be shown
    dataLabelPosition: "b" // Options: 't'|'b'|'l'|'r'|'ctr'

  };
  slide.addChart(pptx.charts.SCATTER, arrDataScatter1, optsChartScat1); // TOP-RIGHT

  var optsChartScat2 = {
    x: 7.0,
    y: 0.6,
    w: "45%",
    h: 3,
    plotArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    showLegend: true,
    legendPos: "b",
    lineSize: 8,
    lineSmooth: true,
    lineDataSymbolSize: 12,
    lineDataSymbolLineColor: "FFFFFF",
    chartColors: _enums_charts.COLORS_RYGU,
    chartColorsOpacity: 25
  };
  slide.addChart(pptx.charts.SCATTER, arrDataScatter2, optsChartScat2); // BOTTOM-LEFT: (Labels)

  var optsChartScat3 = {
    x: 0.5,
    y: 4.0,
    w: "45%",
    h: 3,
    plotArea: {
      fill: {
        color: "F2F9FC"
      }
    },
    //catAxisOrientation: 'maxMin',
    //valAxisOrientation: 'maxMin',
    showLegend: true,
    chartColors: ["FF0000", "0088CC"],
    showValAxisTitle: false,
    lineSize: 0,
    catAxisTitle: "Data Point Labels",
    catAxisTitleColor: "0088CC",
    catAxisTitleFontSize: 14,
    showCatAxisTitle: false,
    // Data Labels
    showLabel: true,
    // Must be set to true or labels will not be shown
    dataLabelPosition: "r",
    // Options: 't'|'b'|'l'|'r'|'ctr'
    dataLabelFormatScatter: "custom" // Can be set to `custom` (default), `customXY`, or `XY`.

  };
  slide.addChart(pptx.charts.SCATTER, arrDataScatterLabels, optsChartScat3); // BOTTOM-RIGHT

  var optsChartScat4 = {
    x: 7.0,
    y: 4.0,
    w: "45%",
    h: 3
  };
  slide.addChart(pptx.charts.SCATTER, arrDataScatter2, optsChartScat4);
} // SLIDE 15: Bubble Chart


function genSlide15(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Bubble Charts",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataBubble1 = [{
    name: "X-Axis",
    values: [0.3, 0.6, 0.9, 1.2, 1.5, 1.7]
  }, {
    name: "Y-Value 1",
    values: [1.3, 9, 7.5, 2.5, 7.5, 3],
    sizes: [1, 4, 2, 3, 7, 4]
  }, {
    name: "Y-Value 2",
    values: [5.0, 3, 2.0, 7.0, 2.0, 9],
    sizes: [9, 7, 9, 2, 4, 8]
  }];
  var arrDataBubble2 = [{
    name: "X-Axis",
    values: [1, 2, 3, 4, 5, 6]
  }, {
    name: "Airplane",
    values: [33, 20, 51, 65, 71, 75],
    sizes: [10, 10, 12, 12, 15, 20]
  }, {
    name: "Train",
    values: [99, 88, 77, 89, 99, 99],
    sizes: [20, 20, 22, 22, 25, 30]
  }, {
    name: "Bus",
    values: [21, 25, 32, 49, 59, 69],
    sizes: [11, 11, 13, 13, 16, 21]
  }]; // TOP-LEFT

  var optsChartBubble1 = {
    x: 0.5,
    y: 0.6,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    chartColors: ["4477CC", "ED7D31"],
    chartColorsOpacity: 40,
    dataBorder: {
      pt: 1,
      color: "FFFFFF"
    }
  };
  slide.addChart(pptx.charts.BUBBLE, arrDataBubble1, optsChartBubble1); // TOP-RIGHT

  var optsChartBubble2 = {
    x: 7.0,
    y: 0.6,
    w: "45%",
    h: 3,
    plotArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    showLegend: true,
    legendPos: "b",
    lineSize: 8,
    lineSmooth: true,
    lineDataSymbolSize: 12,
    lineDataSymbolLineColor: "FFFFFF",
    chartColors: _enums_charts.COLORS_RYGU,
    chartColorsOpacity: 25
  };
  slide.addChart(pptx.charts.BUBBLE, arrDataBubble2, optsChartBubble2); // BOTTOM-LEFT

  var optsChartBubble3 = {
    x: 0.5,
    y: 4.0,
    w: "45%",
    h: 3,
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    plotArea: {
      fill: {
        color: "202020"
      }
    },
    catAxisLabelColor: "F1F1F1",
    catAxisLabelFontSize: 10,
    catAxisOrientation: "maxMin",
    showCatAxisTitle: false,
    //
    valAxisLabelColor: "F1F1F1",
    valAxisLabelFontSize: 10,
    valAxisMinVal: 0,
    valAxisOrientation: "maxMin",
    showValAxisTitle: false,
    //
    dataBorder: {
      pt: 2,
      color: "e1e1e1"
    },
    dataLabelFontFace: "Arial",
    dataLabelFontSize: 10,
    dataLabelColor: "e1e1e1",
    showValue: true
  };
  slide.addChart(pptx.charts.BUBBLE, arrDataBubble1, optsChartBubble3); // BOTTOM-RIGHT

  var optsChartBubble4 = {
    x: 7.0,
    y: 4.0,
    w: "45%",
    h: 3,
    lineSize: 0
  };
  slide.addChart(pptx.charts.BUBBLE3D, arrDataBubble2, optsChartBubble4);
} // SLIDE 16: Radar Chart


function genSlide16(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Radar Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Region 1",
    labels: ["Jun", "Jul", "Aug", "Sep"],
    values: [20, 18, 15, 10]
  }];
  var arrDataStudents = [{
    name: "Student 1",
    labels: ["Logic", "Coding", "Results", "Comments", "Runtime"],
    values: [3, 1, 3, 3, 4]
  }, {
    name: "Student 2",
    labels: ["Logic", "Coding", "Results", "Comments", "Runtime"],
    values: [1, 2, 2, 3, 2]
  }, {
    name: "Student 3",
    labels: ["Logic", "Coding", "Results", "Comments", "Runtime"],
    values: [2, 3, 3, 4, 3]
  }]; // TOP-ROW

  {
    // TOP-L: `{ radar:'normal' }`
    var optsChartRadar1 = {
      x: 0.5,
      y: 0.6,
      w: 4.0,
      h: 3.0,
      chartArea: {
        fill: {
          color: "F9F9F9"
        }
      },
      //
      radarStyle: "standard",
      //
      showTitle: true,
      titleColor: "7F7F7F",
      titleFontFace: "Segoe UI",
      titleFontSize: 12,
      title: "radarStyle: 'standard'",
      //
      lineDataSymbol: "none"
    };
    slide.addChart(pptx.charts.RADAR, arrDataRegions, optsChartRadar1); // TOP-C: `{ radar:'marker' }` Cat Axis options

    var optsChartRadar2 = {
      x: 4.65,
      y: 0.6,
      w: 4.0,
      h: 3.0,
      chartArea: {
        fill: {
          color: "F9F9F9"
        }
      },
      //
      radarStyle: "marker",
      //
      showTitle: true,
      titleColor: "7F7F7F",
      titleFontFace: "Segoe UI",
      titleFontSize: 12,
      title: "radarStyle: 'marker'"
    };
    slide.addChart(pptx.charts.RADAR, arrDataRegions, optsChartRadar2); // TOP-R: `{ radar:'marker' }` Cat Axis options

    var optsChartRadar3 = {
      x: 8.8,
      y: 0.6,
      w: 4.0,
      h: 3.0,
      chartArea: {
        fill: {
          color: "F9F9F9"
        }
      },
      //
      radarStyle: "filled",
      //
      showTitle: true,
      titleColor: "7F7F7F",
      titleFontFace: "Segoe UI",
      titleFontSize: 12,
      title: "radarStyle: 'filled'"
    };
    slide.addChart(pptx.charts.RADAR, arrDataRegions, optsChartRadar3);
  } // BTM-ROW

  {
    // BTM-L: marker/line options
    var optsChartRadar10 = {
      x: 0.5,
      y: 3.8,
      w: 6.0,
      h: 3.5,
      chartArea: {
        fill: {
          color: "F1F1F1"
        }
      },
      //
      radarStyle: "marker",
      catAxisLabelColor: "0088CC",
      catAxisLabelFontFace: "Courier",
      catAxisLabelFontSize: 11,
      //
      chartColors: _enums_charts.COLORS_RYGU,
      // marker & line color
      lineDataSymbol: "diamond",
      // marker type ('circle' | 'dash' | 'diamond' | 'dot' | 'none' | 'square' | 'triangle')
      lineDataSymbolLineColor: "0088CC",
      // marker border color (hex)
      lineDataSymbolLineSize: 2,
      // marker border size (points)
      lineDataSymbolSize: 12,
      // marker size (2-72)
      lineSize: 3,
      // line size
      valAxisLineColor: "D9D9D9",
      // val axis is the main, center N-S, W-E lines
      valAxisLineSize: 2,
      // val axis lines size
      //
      showLegend: true,
      legendPos: "l",
      //
      showTitle: true,
      title: "Line/Marker Options",
      titleColor: "7F7F7F",
      titleFontFace: "Helvetica Neue",
      titleFontSize: 12
    };
    slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar10); // BTM-R: Filled/Axis Options

    var optsChartRadar11 = {
      x: 6.83,
      y: 3.8,
      w: 6.0,
      h: 3.5,
      chartArea: {
        fill: {
          color: "F1F1F1"
        }
      },
      //
      radarStyle: "filled",
      //
      chartColors: _enums_charts.COLORS_RYGU,
      // marker & line color
      chartColorsOpacity: 25,
      catAxisLabelColor: "404040",
      catAxisLabelFontFace: "Segoe UI",
      catAxisLabelFontSize: 10,
      catAxisLineShow: false,
      //
      lineDataSymbolSize: 2,
      // marker size (2-72)
      lineSize: 1,
      // line size
      valAxisLabelFontFace: "Segoe UI",
      valAxisLabelFontSize: 10,
      //
      showLegend: true,
      legendPos: "r",
      legendColor: "404040",
      //
      titleColor: "404040",
      titleFontFace: "Helvetica Neue",
      titleFontSize: 12,
      showTitle: true,
      title: "Filled/Axis Options"
    };
    slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar11);
  }
} // SLIDE 17: Multi-Level Category Axes (2 levels)


function genSlide17(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Multi-Level Category Axes",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataLabels = [["Gear", "Bearing", "Motor", "Switch", "Plug", "Cord", "Fuse", "Bulb", "Pump", "Leak", "Seals"], ["Mechanical", "", "", "Electrical", "", "", "", "", "Hydraulic", "", ""]];
  var arrDataRegions = [{
    name: "Mechanical",
    labels: arrDataLabels,
    values: [11, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    name: "Electrical",
    labels: arrDataLabels,
    values: [0, 0, 0, 19, 12, 11, 3, 2, 0, 0, 0]
  }, {
    name: "Hydraulic",
    labels: arrDataLabels,
    values: [0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 1]
  }];
  var opts1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    catAxisMultiLevelLabels: true
  };
  var opts2 = {
    x: 6.8,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    catAxisMultiLevelLabels: true,
    barDir: "col"
  };
  var opts3 = {
    x: 0.5,
    y: 4.0,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    catAxisMultiLevelLabels: true,
    barDir: "col"
  };
  var opts4 = {
    x: 6.8,
    y: 4.0,
    w: 6.0,
    h: 3.0,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    catAxisMultiLevelLabels: true
  };
  slide.addChart(pptx.charts.AREA, arrDataRegions, opts1);
  slide.addChart(pptx.charts.BAR, arrDataRegions, opts2);
  slide.addChart(pptx.charts.BAR3D, arrDataRegions, opts3);
  slide.addChart(pptx.charts.LINE, arrDataRegions, opts4);
} // SLIDE 18: Multi-Level Category Axes (3 Levels)


function genSlide18(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Multi-Level Category Axes (3 Levels)",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Fruits",
    labels: [["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"], ["Apple", "", "", "", "Banana", "", "", "", "Apple", "", "", "", "Banana", "", "", ""], ["2014", "", "", "", "", "", "", "", "2015", "", "", "", "", "", "", ""]],
    values: [734, 465, 656, 176, 434, 165, 613, 359, 279, 660, 307, 270, 539, 142, 554, 405]
  }];
  var opts1 = {
    x: 0.5,
    y: 0.6,
    w: 12.3,
    h: 6.5,
    chartArea: {
      fill: {
        color: "F1F1F1"
      },
      roundedCorners: false
    },
    catAxisMultiLevelLabels: true,
    chartColors: ["C0504D", "C0504D", "C0504D", "C0504D", "FFC000", "FFC000", "FFC000", "FFC000"]
  };
  slide.addChart(pptx.charts.BAR, arrDataRegions, opts1);
} // SLIDE 19: Combo Chart


function genSlide19(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Combo Chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  slide.addText("(".concat(_enums_charts.CHART_DATA.EvSales_Vol.sourceUrl, ")"), _enums.FOOTER_TEXT_OPTS);
  var comboProps = {
    x: 0.5,
    y: 0.6,
    w: 12.3,
    h: "85%",
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    barDir: "col",
    barGrouping: "stacked",
    //
    catAxisLabelColor: "494949",
    catAxisLabelFontFace: "Arial",
    catAxisLabelFontSize: 10,
    catAxisOrientation: "minMax",
    //
    showLegend: true,
    legendPos: "b",
    //
    showTitle: true,
    titleFontFace: "Calibri Light",
    titleFontSize: 14,
    title: _enums_charts.CHART_DATA.EvSales_Vol.chartTitle,
    //
    valAxes: [{
      showValAxisTitle: true,
      valAxisTitle: "Cars Produced (m)",
      valAxisMaxVal: 10,
      valAxisTitleColor: "1982c4",
      valAxisLabelColor: "1982c4"
    }, {
      showValAxisTitle: true,
      valAxisTitle: "Global Market Share (%)",
      valAxisMaxVal: 10,
      valAxisTitleColor: "F38940",
      valAxisLabelColor: "F38940",
      valGridLine: {
        style: "none"
      }
    }],
    //
    catAxes: [{
      catAxisTitle: "Year"
    }, {
      catAxisHidden: true
    }]
  };
  var comboTypes = [{
    type: pptx.charts.BAR,
    data: _enums_charts.CHART_DATA.EvSales_Vol.chartData,
    options: {
      chartColors: _enums_charts.COLORS_SPECTRUM,
      barGrouping: "stacked"
    }
  }, {
    type: pptx.charts.LINE,
    data: _enums_charts.CHART_DATA.EvSales_Pct.chartData,
    options: {
      chartColors: ["F38940"],
      secondaryValAxis: true,
      secondaryCatAxis: true
    }
  }];
  slide.addChart(comboTypes, comboProps);
} // SLIDE 20: Combo Chart: Various Options


function genSlide20(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Chart Examples: Combo Chart Options",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS); // TOP-L: charts use same val axis (T-B)

  function doColumnAreaLine() {
    var opts = {
      x: 0.6,
      y: 0.6,
      w: 6.0,
      h: 3.0,
      barDir: "col",
      catAxisLabelColor: "666666",
      catAxisLabelFontFace: "Arial",
      catAxisLabelFontSize: 12,
      catAxisOrientation: "minMax",
      showLegend: false,
      showTitle: false,
      valAxisMaxVal: 100,
      valAxisMajorUnit: 10,
      valAxes: [{
        showValAxisTitle: true,
        valAxisTitle: "Primary Value Axis"
      }, {
        showValAxisTitle: true,
        valAxisTitle: "Secondary Value Axis",
        valGridLine: {
          style: "none"
        }
      }],
      catAxes: [{
        catAxisTitle: "Primary Category Axis"
      }, {
        catAxisHidden: true
      }]
    };
    var labels = ["April", "May", "June", "July", "August"];
    var chartTypes = [{
      type: pptx.charts.AREA,
      data: [{
        name: "Current",
        labels: labels,
        values: [1, 4, 7, 2, 3]
      }],
      options: {
        chartColors: ["00FFFF"],
        barGrouping: "standard",
        secondaryValAxis: !!opts.valAxes,
        secondaryCatAxis: !!opts.catAxes
      }
    }, {
      type: pptx.charts.BAR,
      data: [{
        name: "Bottom",
        labels: labels,
        values: [17, 26, 53, 10, 4]
      }],
      options: {
        chartColors: ["0000FF"],
        barGrouping: "stacked"
      }
    }, {
      type: pptx.charts.LINE,
      data: [{
        name: "Current",
        labels: labels,
        values: [5, 3, 2, 4, 7]
      }],
      options: {
        barGrouping: "standard",
        secondaryValAxis: !!opts.valAxes,
        secondaryCatAxis: !!opts.catAxes
      }
    }];
    slide.addChart(chartTypes, opts);
  } // TOP-R: charts use diff val axis (T-B, L-R)


  function doStackedLine() {
    var opts = {
      x: 6.83,
      y: 0.6,
      w: 6.0,
      h: 3.0,
      chartArea: {
        fill: {
          color: "F1F1F1"
        }
      },
      barDir: "col",
      barGrouping: "stacked",
      catAxisLabelColor: "0000CC",
      catAxisLabelFontFace: "Arial",
      catAxisLabelFontSize: 12,
      catAxisOrientation: "minMax",
      showLegend: false,
      showTitle: false,
      valAxisMaxVal: 100,
      valAxisMajorUnit: 10
    };
    var labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    var chartTypes = [{
      type: pptx.charts.BAR,
      data: [{
        name: "Bottom",
        labels: labels,
        values: [17, 26, 53, 10, 4]
      }, {
        name: "Middle",
        labels: labels,
        values: [55, 40, 20, 30, 15]
      }, {
        name: "Top",
        labels: labels,
        values: [10, 22, 25, 35, 70]
      }],
      options: {
        barGrouping: "stacked"
      }
    }, {
      type: pptx.charts.LINE,
      data: [{
        name: "Current",
        labels: labels,
        values: [25, 35, 55, 10, 5]
      }],
      options: {
        barGrouping: "standard"
      }
    }];
    slide.addChart(chartTypes, opts);
  } // BTM-L:


  function doStackedDot() {
    var opts = {
      x: 0.5,
      y: 4.0,
      w: 6.0,
      h: 3.0,
      chartArea: {
        fill: {
          color: "F1F1F1"
        }
      },
      barDir: "col",
      barGrouping: "stacked",
      catAxisLabelColor: "999999",
      catAxisLabelFontFace: "Arial",
      catAxisLabelFontSize: 14,
      catAxisOrientation: "minMax",
      showLegend: false,
      showTitle: false,
      valAxisMaxVal: 100,
      valAxisMinVal: 0,
      valAxisMajorUnit: 20,
      lineSize: 0,
      lineDataSymbolSize: 20,
      lineDataSymbolLineSize: 2,
      lineDataSymbolLineColor: "FF0000",
      //dataNoEffects: true,
      valAxes: [{
        showValAxisTitle: true,
        valAxisTitle: "Primary Value Axis"
      }, {
        showValAxisTitle: true,
        valAxisTitle: "Secondary Value Axis",
        catAxisOrientation: "maxMin",
        valAxisMajorUnit: 1,
        valAxisMaxVal: 10,
        valAxisMinVal: 1,
        valGridLine: {
          style: "none"
        }
      }],
      catAxes: [{
        catAxisTitle: "Primary Category Axis"
      }, {
        catAxisHidden: true
      }]
    };
    var labels = ["Q1", "Q2", "Q3", "Q4", "OT"];
    var chartTypes = [{
      type: pptx.charts.BAR,
      data: [{
        name: "Bottom",
        labels: labels,
        values: [17, 26, 53, 10, 4]
      }, {
        name: "Middle",
        labels: labels,
        values: [55, 40, 20, 30, 15]
      }, {
        name: "Top",
        labels: labels,
        values: [10, 22, 25, 35, 70]
      }],
      options: {
        barGrouping: "stacked"
      }
    }, {
      type: pptx.charts.LINE,
      data: [{
        name: "Current",
        labels: labels,
        values: [5, 3, 2, 4, 7]
      }],
      options: {
        barGrouping: "standard",
        secondaryValAxis: !!opts.valAxes,
        secondaryCatAxis: !!opts.catAxes,
        chartColors: ["FFFF00"]
      }
    }];
    slide.addChart(chartTypes, opts);
  } // BTM-R:


  function doBarCol() {
    var opts = {
      x: 6.83,
      y: 4.0,
      w: 6.0,
      h: 3.0,
      chartArea: {
        fill: {
          color: "F1F1F1"
        }
      },
      barDir: "col",
      barGrouping: "stacked",
      catAxisLabelColor: "999999",
      catAxisLabelFontFace: "Arial",
      catAxisLabelFontSize: 14,
      catAxisOrientation: "minMax",
      showLegend: false,
      showTitle: false,
      valAxisMaxVal: 100,
      valAxisMinVal: 0,
      valAxisMajorUnit: 20,
      valAxes: [{
        showValAxisTitle: true,
        valAxisTitle: "Primary Value Axis"
      }, {
        showValAxisTitle: true,
        valAxisTitle: "Secondary Value Axis",
        catAxisOrientation: "maxMin",
        valAxisMajorUnit: 1,
        valAxisMaxVal: 10,
        valAxisMinVal: 1,
        valGridLine: {
          style: "none"
        }
      }],
      catAxes: [{
        catAxisTitle: "Primary Category Axis"
      }, {
        catAxisHidden: true
      }]
    };
    var labels = ["Q1", "Q2", "Q3", "Q4", "OT"];
    var chartTypes = [{
      type: pptx.charts.BAR,
      data: [{
        name: "Bottom",
        labels: labels,
        values: [17, 26, 53, 10, 4]
      }, {
        name: "Middle",
        labels: labels,
        values: [55, 40, 20, 30, 15]
      }, {
        name: "Top",
        labels: labels,
        values: [10, 22, 25, 35, 70]
      }],
      options: {
        barGrouping: "stacked"
      }
    }, {
      type: pptx.charts.BAR,
      data: [{
        name: "Current",
        labels: labels,
        values: [5, 3, 2, 4, 7]
      }],
      options: {
        barDir: "bar",
        barGrouping: "standard",
        chartColors: ["0077BF", "4E9D2D", "ECAA00", "5FC4E3", "DE4216", "154384"],
        secondaryValAxis: !!opts.valAxes,
        secondaryCatAxis: !!opts.catAxes
      }
    }];
    slide.addChart(chartTypes, opts);
  }

  doColumnAreaLine();
  doStackedLine();
  doStackedDot();
  doBarCol();
} // SLIDE 21: Misc Options


function genSlide21(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "Misc Options: Shadow, Transparent Colors",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataRegions = [{
    name: "Region 2",
    labels: ["April", "May", "June", "July", "August"],
    values: [0, 30, 53, 10, 25]
  }, {
    name: "Region 3",
    labels: ["April", "May", "June", "July", "August"],
    values: [17, 26, 53, 100, 75]
  }, {
    name: "Region 4",
    labels: ["April", "May", "June", "July", "August"],
    values: [55, 43, 70, 90, 80]
  }, {
    name: "Region 5",
    labels: ["April", "May", "June", "July", "August"],
    values: [55, 43, 70, 90, 80]
  }];
  var arrDataHighVals = [{
    name: "California",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [2000, 2800, 3200, 4000, 5000]
  }, {
    name: "Texas",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [1400, 2000, 2500, 3000, 3800]
  }];
  var single = [{
    name: "Texas",
    labels: ["Apartment", "Townhome", "Duplex", "House", "Big House"],
    values: [1400, 2000, 2500, 3000, 3800]
  }]; // TOP-LEFT: H/bar

  var optsChartBar1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    showTitle: true,
    title: "Large blue shadow",
    barDir: "bar",
    barGrouping: "standard",
    dataLabelColor: "FFFFFF",
    showValue: true,
    shadow: {
      type: "outer",
      blur: 10,
      offset: 5,
      angle: 45,
      color: "0059B1",
      opacity: 1
    }
  };
  var pieOptions = {
    x: 7.0,
    y: 0.6,
    w: 6.0,
    h: 3.0,
    showTitle: true,
    title: "Rotated cyan shadow",
    dataLabelColor: "FFFFFF",
    shadow: {
      type: "outer",
      blur: 10,
      offset: 5,
      angle: 180,
      color: "00FFFF",
      opacity: 1
    }
  }; // BTM-LEFT: H/bar - 100% layout without axis labels

  var optsChartBar3 = {
    x: 0.5,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    showTitle: true,
    title: "No shadow, transparent colors",
    barDir: "bar",
    barGrouping: "stacked",
    chartColors: ["transparent", "5DA5DA", "transparent", "FAA43A"],
    shadow: {
      type: "none"
    }
  }; // BTM-RIGHT: V/col - TITLE and LEGEND

  var optsChartBar4 = {
    x: 7.0,
    y: 3.8,
    w: 6.0,
    h: 3.5,
    barDir: "col",
    barGrouping: "stacked",
    showTitle: true,
    title: "Red glowing shadow",
    titleBold: true,
    titleFontFace: "Times",
    catAxisLabelColor: "0000CC",
    catAxisLabelFontFace: "Times",
    catAxisLabelFontSize: 12,
    catAxisOrientation: "minMax",
    chartColors: ["5DA5DA", "FAA43A"],
    shadow: {
      type: "outer",
      blur: 20,
      offset: 1,
      angle: 90,
      color: "A70000",
      opacity: 1
    }
  };
  slide.addChart(pptx.charts.BAR, single, optsChartBar1);
  slide.addChart(pptx.charts.PIE, _enums_charts.dataChartPieStat, pieOptions);
  slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar3);
  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar4);
} // --------------------------------------------------------------------------------
// DEV/TEST 01: Bar Chart: Lots of Series


function devSlide01(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts-DevTest"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "DEV-TEST: lots-of-bars (>26 letters); negative val check",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var arrDataHighVals = [{
    name: "Alphabet Letter Value",
    labels: _enums_charts.LETTERS.concat(["AA", "AB", "AC", "AD"]),
    values: [-5, -3, 0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  }];
  var optsChart = {
    x: 0.5,
    y: 0.5,
    w: "90%",
    h: "90%",
    barDir: "col",
    showLegend: true,
    chartColors: ["154384"],
    invertedColors: ["0088CC"],
    //
    title: "Chart With >26 Cols",
    showTitle: true,
    titleFontSize: 18,
    //
    showCatAxisTitle: true,
    catAxisTitle: "Letters",
    catAxisTitleColor: "4286f4",
    catAxisTitleFontSize: 14,
    //
    showValAxisTitle: true,
    valAxisTitle: "Column Index",
    valAxisTitleColor: "c11c13",
    valAxisTitleFontSize: 16
  }; // TEST `getExcelColName()` to ensure Excel Column names are generated correctly above >26 chars/cols

  slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChart);
} // DEV/TEST 02: Line Chart: Lots of Series


function devSlide02(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts-DevTest"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "DEV-TEST: lots-of-series",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var MAXVAL = 20000;
  var arrDataTimeline = [];

  for (var idx = 0; idx < 15; idx++) {
    var tmpObj = {
      name: "Series ".concat(idx),
      labels: _enums_charts.MONS,
      values: []
    };

    for (var idy = 0; idy < _enums_charts.MONS.length; idy++) {
      tmpObj.values.push(Math.floor(Math.random() * MAXVAL) + 1);
    }

    arrDataTimeline.push(tmpObj);
  } // FULL SLIDE:


  var optsChartLine1 = {
    x: 0.5,
    y: 0.6,
    w: "95%",
    h: "85%",
    plotArea: {
      fill: {
        color: "F2F9FC"
      }
    },
    valAxisMaxVal: MAXVAL,
    showLegend: true,
    legendPos: "r"
  };
  slide.addChart(pptx.charts.LINE, arrDataTimeline, optsChartLine1);
} // DEV/TEST 03: escaped-XML


function devSlide03(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts-DevTest"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "DEV-TEST: escaped-xml",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  slide.addChart(pptx.charts.BAR, [{
    name: "Escaped XML chars",
    labels: ["escaped", "xml", "chars", "'", '"', "&", "<", ">"],
    values: [1.2, 2.3, 2.15, 6.05, 8.01, 2.02, 9.9, 0.9]
  }], {
    x: 0.5,
    y: 0.6,
    w: "90%",
    h: "90%",
    chartArea: {
      fill: {
        color: "404040"
      }
    },
    catAxisLabelColor: "F1F1F1",
    valAxisLabelColor: "F1F1F1",
    valAxisLineColor: "7F7F7F",
    valGridLine: {
      color: "7F7F7F"
    },
    dataLabelColor: "B7B7B7",
    barDir: "bar",
    showValue: true,
    chartColors: [].concat(_toConsumableArray(_enums_charts.ACCENT_COLORS), _toConsumableArray(_enums_charts.ACCENT_COLORS)),
    barGapWidthPct: 25,
    catAxisOrientation: "maxMin",
    valAxisOrientation: "maxMin",
    valAxisMaxVal: 10,
    valAxisMajorUnit: 1
  });
} // DEV/TEST 04: Combo Chart


function devSlide04(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts-DevTest"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "DEV-TEST: combo-chart",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var labels = ["Q1", "Q2", "Q3", "Q4", "OT"];
  var chartTypes = [{
    type: pptx.charts.BAR,
    data: [{
      name: "Projected",
      labels: labels,
      values: [17, 26, 53, 10, 4]
    }],
    options: {
      barDir: "col",
      chartColors: _enums_charts.COLORS_VIVID
    }
  }, {
    type: pptx.charts.LINE,
    data: [{
      name: "Current",
      labels: labels,
      values: [5, 3, 2, 4, 7]
    }],
    options: {
      secondaryValAxis: true,
      secondaryCatAxis: true
    }
  }];
  var multiOpts = {
    x: 0.5,
    y: 0.6,
    w: 12.33,
    h: 6,
    valAxisMaxVal: 100,
    valAxisMinVal: 0,
    valAxisMajorUnit: 20,
    valAxes: [{
      showValAxisTitle: true,
      valAxisTitle: "Primary Value Axis"
    }, {
      showValAxisTitle: true,
      valAxisTitle: "Secondary Value Axis",
      valAxisMajorUnit: 1,
      valAxisMaxVal: 10,
      valAxisMinVal: 1,
      valGridLine: {
        style: "none"
      }
    }],
    catAxes: [{
      catAxisTitle: "Primary Category Axis"
    }, {
      catAxisHidden: true
    }]
  };
  slide.addChart(chartTypes, multiOpts);
} // DEV/TEST 05: ref-check


function devSlide05(pptx) {
  var slide = pptx.addSlide({
    sectionTitle: "Charts-DevTest"
  });
  slide.addNotes("API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html");
  slide.addTable([[{
    text: "DEV-TEST: ref-test",
    options: _enums.BASE_TEXT_OPTS_L
  }, _enums.BASE_TEXT_OPTS_R]], _enums.BASE_TABLE_OPTS);
  var optsChartPie1 = {
    x: 0.5,
    y: 0.6,
    w: 6.0,
    h: 6.4,
    chartArea: {
      fill: {
        color: "F1F1F1"
      }
    },
    holeSize: 70,
    showLabel: false,
    showValue: false,
    showPercent: true,
    showLegend: true,
    legendPos: "b",
    //
    chartColors: _enums_charts.COLORS_SPECTRUM,
    dataBorder: {
      pt: "2",
      color: "F1F1F1"
    },
    dataLabelColor: "FFFFFF",
    dataLabelFontSize: 14,
    //
    showTitle: false,
    title: "Project Status",
    titleColor: "33CF22",
    titleFontFace: "Helvetica Neue",
    titleFontSize: 24
  };
  slide.addChart(pptx.charts.DOUGHNUT, _enums_charts.dataChartPieStat, optsChartPie1); // [TEST][INTERNAL]: Used for ensuring ref counting works across mixed object types (eg: `rId` check/test)

  slide.addImage({
    path: _enums.IMAGE_PATHS.ccCopyRemix.path,
    x: 6.83,
    y: 0.6,
    w: 6.0,
    h: 6.0
  });
}