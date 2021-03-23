import React from 'react';
import UserServices from "../services/UserServices";


class UserComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        UserServices.getUsers().then((response) => {
            this.setState({users:response.data})
        })
    }

    render() {
        <div>
            <h1 className="text-center">Users List</h1>
            <table className="table table-striped"></table>
            <thead>
            <tr>
                <td>User ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <tbody>

                </tbody>
            </tr>
            </thead>
        </div>
    }
}

export default UserComponent;