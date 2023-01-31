
export function asnweredListReducer (state =[], action) {
    switch (action.type) {
        case "ANSWEREDLIST/ADD":
            return [
                ...state,
                {
                    ...action.payload
                }
            ];
        case "ANSWEREDLIST/CLEAR":
            return [];
    
        default:
            return state;
    }
}
