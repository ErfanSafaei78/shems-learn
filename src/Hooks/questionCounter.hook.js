import { useDispatch, useSelector } from "react-redux"

export function useQuestionCounter() {
    const time = [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()];
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
        const questionCounterState = JSON.parse(localStorage.getItem("questionCounterState"));
        const [year, month, date] = questionCounterState.time;

        if (+date < time[2] || +month < time[1] || +year < time[0]) { 
            clear();
            return true;
        } else if (questionCounterState.counterState >= 5) { // از 24 ساعت نگذشته باشد و یوزر 5 سوال خود را جواب داده باشد
            return false;
        } else if (questionCounterState.counterState < 5) { // از 24 ساعت نگذشته باشد و یوزر کمتر از 5 سوال جواب داده باشد
            return true;
        }
    }
    return {
        addCount,
        clear,
        isValidToAnswer,
    }
}