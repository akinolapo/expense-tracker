// Reducer => a func that takes in the old state, and an action => new state...

const transactions = [
    {id: 1, }
]

const contextReducer = (state, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            const transactions = state.filter((t) => t.id )
            
            break;
        case ADD_TRANSACTION:
            
            break;
    
        default:
            break;
    }

}

export default contextReducer