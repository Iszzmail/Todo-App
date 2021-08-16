import React from 'react'

class Button extends React.Component{

render(){
    return(
        <span>
            <button onClick={this.props.click} type={this.props.type}>{this.props.text}</button>
        </span>
    )
}
}

export default Button