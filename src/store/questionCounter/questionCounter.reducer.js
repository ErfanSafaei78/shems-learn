
export function questionCounterReducer(state = 0, action) {
    switch (action.type) {
        case "COUNTER/INC":
            return state+1;
        case "COUNTER/CLEAR":
            return state = 0;
        default:
            return state;
    }
}