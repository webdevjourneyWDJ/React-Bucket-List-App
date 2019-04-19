let toggle = false;

const toggleText = () => {
  toggle = !toggle;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Toggle Mini App</h1>
      <button onClick={toggleText}>{toggle ? "Hide Details" : "Show Details"}</button>
      {
        toggle && (
          <div>
            <p>Hey. Made you click!</p>
          </div>
        )
      }
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
}


render();
