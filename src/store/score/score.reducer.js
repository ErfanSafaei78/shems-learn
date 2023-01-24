
export function scoreReducer(state = 0, action){
    switch (action.type) {
        case "SCORE/INC":
            return state+10;
        case "SCORE/DEC":
            return state-5;
        default:
            return state;
    }
}