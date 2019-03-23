console.log("Runnning");

var template = React.createElement("p", {
    id: "id",
    class: "class"
  }, "New JSX component");


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);