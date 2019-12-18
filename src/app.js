class BucketListApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum]; 
        alert(option)
    }

    handleAddOption(option) {
        if(!option){
            return 'Enter an actual string';
        }else if(this.state.options.indexOf(option) > -1){
            return 'this option is in the array'
        }

        this.setState((prevState) => {
            return {
                options:prevState.options.concat(option)
            }
        })
    }
    render() {

        const title = "Bucket List App";
        const subtitle = "Make a computer decide your way of life!";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}



class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick} 
                    disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                   this.props.options.map((option, index) => <Option key={index} optionText={option} />) 
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return{error}
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<BucketListApp />, document.getElementById('app'));




