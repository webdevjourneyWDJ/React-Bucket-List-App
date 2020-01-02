import React from 'react';
import AddOption from './Addoption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class BucketListApp extends React.Component {
    state = {
        options: [],
        isSelected: undefined
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

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }

    handleClearIsSelected = () => {
        this.setState(() => ({
            isSelected: undefined
        }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
            }
        })      
    }

    handlePick = () =>{
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum]; 
        this.setState(() => ({
            isSelected: option
        }))
    }

    handleAddOption = (option) => {
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
                <OptionModal 
                    isSelected={this.state.isSelected}
                    handleClearIsSelected={this.handleClearIsSelected}/>
            </div>
        )
    }
}

BucketListApp.defaultProps = {
    options: []
}


