console.log("Runnning");

const app = {
    title: "The Bucket List",
    subtitle: "Make a computer decide your way of life!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};


const onRemoveAll = () => {
    app.options = [];
    render();
}

const onRandomDecision = () => {
  const ranNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[ranNum];
  alert(option);
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are yout options:" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onRandomDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return <li key={index}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
