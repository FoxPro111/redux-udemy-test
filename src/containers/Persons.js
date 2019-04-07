import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsType from '../store/actionsType';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (name, age) => dispatch({ type: actionsType.ADD_PERSON, personData: { name, age } }),
        onRemovePerson: (id) => dispatch({ type: actionsType.DELETE_PERSON, id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);