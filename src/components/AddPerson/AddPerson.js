import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    inputNameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    inputAgeHandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div className="AddPerson">
                <input type="text" value={this.state.name} placeholder="Name" onChange={this.inputNameHandler} />
                <input type="text" value={this.state.age} placeholder="Age" onChange={this.inputAgeHandler} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
};

export default addPerson;