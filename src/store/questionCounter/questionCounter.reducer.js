
export function questionCounterReducer(state = 0, action) {
    switch (action.type) {
        case "COUNTER/INC":
            return state+1;
        case "COUNTER/DEC":
            return state-1;
    
        default:
            return state;
    }
}