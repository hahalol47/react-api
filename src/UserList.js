import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            userList: []
        }
    }

    getUserList = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then( list => {
            console.log(list.data);

            this.setState({userList: list.data})
            
        })
    }
    componentDidMount(){
        this.getUserList();
    }
    render() {
        const users = this.state.userList;
        const userList = users.map((user) =>
          <li key={user.name}>
            {user.name}
          </li>
        );
      return (
        <div className="user-list">
          <h1>User list</h1>
          <ul>
            {userList}
          </ul>
        </div>
      );
    }
}

export default UserList;