import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.LoginAction = this.LoginAction.bind(this)
        this.LogoutAction = this.LogoutAction.bind(this)
        this.ChangeName = this.ChangeName.bind(this)
        this.state = {
            isLoggedIn : true,
            name : ""
        }
    }
    LoginAction(){
        this.setState({isLoggedIn : true})
    }
    LogoutAction(){
        this.setState({
            isLoggedIn : false,
            name : ""
        })

    }
    ChangeName(e){
        this.setState({
            name : e.target.value
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <div>
                        <p>Hoşgeldin {this.state.name}</p>
                        <button onClick={this.LogoutAction}>Çıkış Yap</button>

                    </div>
        }else{

            button = <div>
                        <input value={this.state.name} onChange={this.ChangeName}/>
                        <button onClick={this.LoginAction}>Giriş Yap</button>
                    </div>
        }
        return (
            <div>
                {button}
            </div>
        );
    }
}

export default Auth;

ReactDOM.render(
    <Auth/>,
    document.getElementById('root')
)
