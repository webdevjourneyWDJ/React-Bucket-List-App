class BucketListApp extends React.Component {
    render() {

        const title = "Bucket List App";
        const subtitle = "Make a computer decide your way of life!";
        const options = ["one", "two", "three"];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
    handlePick() {
        alert('handlePick')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    
    handleRemoveAll() {
        console.log(this.props.options);
        // alert('handleRemoveALl')
    }

    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<BucketListApp />, document.getElementById('app'));




