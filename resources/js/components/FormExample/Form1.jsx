import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            viewResult : false
        }
    }

    changeAct = (e) => {
        this.setState({
            name : e.target.value,
            viewResult : false
        })
    }
    submitAct = (e) => {
        this.setState({
            viewResult : true
        })
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form>
                    <label>İsminizi giriniz</label>
                    <input value={this.state.name} onChange={this.changeAct}/>
                    <button formMethod="submit" onClick={this.submitAct} >Gönder</button>
                </form>
                {
                    this.state.viewResult &&
                        <p>Girilen İsim : {this.state.name}</p>
                }
            </div>
        );
    }
}

export default Form1;

ReactDOM.render(
    <Form1/>,
    document.getElementById('root')
)
