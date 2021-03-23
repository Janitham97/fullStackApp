import React from 'react';
import UserServices from "../services/UserServices";


class UserComponent extends React.Component{

    constructor(props) {
        super(props);
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
        return(
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
                {
                    this.state.users.map(
                        users =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                    )
                }
                </tbody>
            </tr>
            </thead>
        </div>
        )
    }
}

export default UserComponent;