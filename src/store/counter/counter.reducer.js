const initialState = {
  counter: 1,
  time: [],
}
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "COUNTER/UPDATE":
      return {
        counter: action.payload.counter,
        time: action.payload.time,
      };
    case "COUNTER/CLEAR":
      return {
        counter: 0,
        time: [],
      };
    default:
      return state;
  }
}
