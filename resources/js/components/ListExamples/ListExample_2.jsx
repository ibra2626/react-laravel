import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
    let user = props.user;
    return (
        <li>{user.name}</li>
    )
}

class ListExample_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : [
                {
                    id : 1,
                    name : "ibrahim"
                },
                {
                    id : 2,
                    name : "deniz"
                },
                {
                    id : 3,
                    name : "ece"
                }
            ]
        }
    }


    render() {

        let userListItems = this.state.users.map((user) => {
           return <ListItem user={user} key={user.id}/>
        })

        return (
            <div>
                <ul>{userListItems}</ul>
            </div>
        );
    }
}

export default ListExample_1;

ReactDOM.render(
    <ListExample_1/>,
    document.getElementById('root')
)
