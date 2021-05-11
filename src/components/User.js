import React, { Component } from 'react'

class User extends Component {
    constructor(probs){
        super(probs);
        this.state = {
            isvisible : false
        }
    }
    render() {
        // Destructing
        const {name, department, salary} = this.props;
        const {isvisible} = this.state;
        return (
            <div className = "col-md-8 mb-4">
                <div className = "card">
                    <div className="card-header d-flex justify-content-between">
                        <h4>İsim : {name} <i className="fa fa-check-square" aria-hidden="true"></i></h4>
                        <i className = "far fa-trash-alt" styele = {{cursor: "pointer"}}></i>
                    </div>
                </div>
                {
                    isvisible ?  <div className="card-body">
                    <p className="card-text">Departman : {department}</p>
                    <p className="card-text">Salary : {salary}</p>
                </div> : null
                }


            </div>
        )
    }
}

export default User;
