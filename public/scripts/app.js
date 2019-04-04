"use strict";

console.log("Runnning");
var app = {
  title: "The Bucket List",
  subtitle: "Make a computer decide your way of life!",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? "Here are yout options:" : "No options"), React.createElement("p", null, app.options.length), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, React.createElement("li", null, "item 1"), React.createElement("li", null, "item 2")), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

render();
