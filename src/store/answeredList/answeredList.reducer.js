
export function asnweredListReducer (state =[], action) {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    ...action.payload
                }
            ];
        case "CLEAR":
            return [];
    
        default:
            return state;
    }
}