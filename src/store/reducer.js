import * as actionsType from './actionsType';

const initState = {
    persons: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionsType.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                ...action.personData
            };

            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }

        case actionsType.DELETE_PERSON:
            const newPersons = state.persons.filter(person => person.id !== action.id);

            return {
                ...state,
                persons: newPersons
            }
    }

    return state;
}

export default reducer;