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
        const countDown = 24 * 60 * 60 * 1000; //مقدار 24 ساعت در میلی ثانیه
        const questionCounterState = JSON.parse(localStorage.getItem("questionCounterState"));
        if (time - questionCounterState.time > countDown ) { // از 24 ساعت گذشته باشد
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