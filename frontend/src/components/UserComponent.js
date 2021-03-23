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
            <table className="table table-striped">
            <thead>
            <tr>
                <td>User ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map(
                        users =>
                            <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.email}</td>
                            </tr>
                    )
                }
            </tbody>
            </table>
        </div>
        )
    }
}

export default UserComponent;