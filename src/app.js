class BucketListApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() { 
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
            }
        } catch (error) {}      
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options); 
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");        
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
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

        this.setState((prevState) => ({options:prevState.options.concat(option)}))
    }
    render() {
        const subtitle = "Make a computer decide your way of life!";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}   
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

BucketListApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Bucket List App'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
               props.options.map((option, index) => (
                   <Option 
                    key={index} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                   />)) 
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>remove</button>
        </div>
    )
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

        this.setState(() => ({error}))

        if(!error){
            e.target.elements.option.value = '';
        }
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

ReactDOM.render(<BucketListApp options={['red light district', 'go to japan']}/>, document.getElementById('app'));




