import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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
           return <li key={user.id.toString()}>{user.name}</li>
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
