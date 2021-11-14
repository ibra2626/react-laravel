import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleon : true
        }
        // this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick = () => {
        this.setState(prevValue => (
            {
                isToggleon : !prevValue.isToggleon
            }
        ))
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonClick}>
                    {this.state.isToggleon ? "AÇIK" : "KAPALI"}
                </button>
            </div>
        );
    }
}

export default Toggle;

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)
