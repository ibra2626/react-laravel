import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginButton from './DashboardComponents/LoginButton';
import LogoutButton from './DashboardComponents/LogoutButton';
import UsernameInput from './DashboardComponents/UsernameInput'
import ErrorUsername from './DashboardComponents/Error';
import Welcome from './DashboardComponents/Welcome';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            username : "",
            AuthUser : "",
            users : [
                {
                    id : 1,
                    name : "ibrahim",
                    rol : "admin"
                },
                {
                    id : 2,
                    name : "deniz",
                    rol : "user"
                },
                {
                    id : 3,
                    name : "irem",
                    rol : "user"
                }
            ],
            bannedUsers : [],
            loginFailed : false
        }

        this.LoginAction = this.LoginAction.bind(this)
        this.LogoutAction = this.LogoutAction.bind(this)
        this.UsernameInputChangeAct = this.UsernameInputChangeAct.bind(this)
    }

    LoginAction(){
        let user = this.state.users.find(user => user.name == this.state.username);
        user != null ?  this.setState({AuthUser : user , isLoggedIn : true, username : ""}) : this.setState({loginFailed : true})
    }
    LogoutAction(){
        this.setState({AuthUser : "",isLoggedIn : false})
    }
    UsernameInputChangeAct(e){
        this.setState({username : e.target.value,loginFailed : false})
    }
    render() {
        let isLoggedIn = this.state.isLoggedIn
        let isLoginFailed = this.state.loginFailed
        return (
            <div>
                {
                    isLoggedIn ?
                        <>
                            <Welcome user={this.state.AuthUser}/>
                            <LogoutButton onClick={this.LogoutAction} />
                        </>
                        :
                        <>
                            {
                                    <ErrorUsername username={this.state.username} loginFailed={isLoginFailed}/>

                            }
                            <UsernameInput value={this.state.username} onChange={this.UsernameInputChangeAct}/>
                            <LoginButton onClick={this.LoginAction}/>
                        </>
                }
            </div>
        );
    }
}

export default Dashboard;

ReactDOM.render(
    <Dashboard/>,
    document.getElementById('root')
)
