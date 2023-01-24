import { useDispatch, useSelector } from "react-redux"

export function useQuestionCounter() {
    const time = new Date().getTime;
    const dispatch = useDispatch();
    const counterState = useSelector(state => state.questionCounter)

    function addCount(){
        dispatch({
            type:"COUNTER/INC",
        })

        localStorage.setItem("questionCounterState", JSON.stringify({
            counterState,
            time,  
          }))
    }

    function clear() {
        dispatch({
            type: "COUNTER/CLEAR",
        })
        localStorage.setItem("questionCounterState", JSON.stringify({
            counterState,
            time,
        }))
    }

    function isValidToAnswer() {
        const countDown = 24 * 60 * 60 * 1000;
        const questionCounterState = JSON.parse(localStorage.getItem("questionCounterState"));
        if (time - questionCounterState.time > countDown ) {
            clear();
            return true;
        } else if (questionCounterState.counterState >= 5) {
            return false;
        } else if (questionCounterState.counterState < 5) {
            return true;
        }
    }
    return {
        addCount,
        clear,
        isValidToAnswer,
    }
}