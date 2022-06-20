"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHTML = void 0;

var html2pptxgenjs = require('html2pptxgenjs');

var addHTML = function addHTML(slide) {
  var elements = ["\n        <h1 style=\"font-family:Courier New;color:maroon;\">Coronavirus Advice</h1>\n\n        <ol>\n            <li><span class=\"question\">How can I avoid getting infected?</span>\n                <ul>\n                    <li>Wash your hands frequently\n                    <li>Stay two meters away from people who may be infected\n                </ul>\n            <li><span class=\"question\">How can I avoid infecting others?</span>\n                <ul>\n                    <li>Cough or sneeze into your elbow or use a tissue, dispose the tissue immediately\n                    <li>Wash your hands frequently\n                    <li>Stay two meters away from people\n                </ul>\n            <li><span class=\"question\">What is physical distancing and why and how should I do it?</span>\n                <ul>\n                    <li>Physical distancing aims to reduce physical contact between potentially infected people and healthy people\n                    <li>Isolate yourself if you know you have the virus that causes COVID-19, or if you have suggestive respiratory symptoms, or if you belong to a high-risk group (i.e. you are aged 70 years or more, or you have an underlying health condition)\n                </ul>\n        </ol>\n        <p>For more information visit <a href=\"http://www.salute.gov.it/\">Q &amp; A on COVID-19</a>\n        "]; // Options

  var options = {};
  options.css = "\nh1 {\n    color: blue;\n    text-align: center;\n}\n.question {\n    color: red;\n    font-size: 1.2em;\n}\n";
  elements.forEach(function (text) {
    var items = html2pptxgenjs.htmlToPptxText(text, options);
    slide.addText(items, {
      x: 0.5,
      y: 0,
      w: 9.5,
      h: 6,
      valign: 'top'
    });
    return items;
  });
};

exports.addHTML = addHTML;