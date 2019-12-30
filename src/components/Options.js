import React from 'react'
import Option from './Option'

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

export default Options;