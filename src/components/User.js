import React, { Component } from 'react'

class User extends Component {
    render() {

        // Destructing
        const {name, department, salary} = this.props;
        return (
            <div>
                <ul>
                    <li>İsim : {name} <i className="fa fa-check-square" aria-hidden="true"></i></li>
                    <li>Departman : {department} <i className="fa fa-window-close-o" aria-hidden="true"></i>
</li>
                    <li>Maaş : {salary}</li>
                </ul>
            </div>
        )
    }
}

export default User;
