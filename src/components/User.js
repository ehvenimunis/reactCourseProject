import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>İsim : {this.props.name}</li>
                    <li>Departman : Software</li>
                    <li>Maaş : 9000</li>
                </ul>
            </div>
        )
    }
}

export default User;
