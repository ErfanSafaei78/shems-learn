import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

export function useQuestionCounter() {
    const time = [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()];
    const dispatch = useDispatch();
    const counterState = useSelector(state => state.questionCounter)
    const localStorageState = JSON.parse(localStorage.getItem("questionCounterState"));


    useEffect(()=>{
        if (localStorageState !== null){
            dispatch({
                type:"COUNTER/UPDATE",
                payload: localStorageState,
            })
        }
    },[])
    function updateCount(count){
        dispatch({
            type:"COUNTER/UPDATE",
            payload: {
                counter: count,
                time,
            }
        })
        localStorage.setItem("questionCounterState", JSON.stringify({
            counter: counterState.counter,
            time,  
          }))
    }

    function clear() {
        dispatch({
            type: "COUNTER/CLEAR",
        })
        localStorage.setItem("questionCounterState", JSON.stringify({
            counter: 0,
            time: [],
        }))
    }

    function getCount() {
        return counterState;
    }

    function isValidToAnswer() {
        const questionCounterState = JSON.parse(localStorage.getItem("questionCounterState"));
        if (localStorageState === null) {
            return true;
        }else {
            const [year, month, date] = localStorageState.time;

            if (+date < time[2] || +month < time[1] || +year < time[0]) { 
                clear();
                return true;
            } else if (questionCounterState.counter >= 5) { // از 24 ساعت نگذشته باشد و یوزر 5 سوال خود را جواب داده باشد
                return false;
            } else if (questionCounterState.counter < 5) { // از 24 ساعت نگذشته باشد و یوزر کمتر از 5 سوال جواب داده باشد
                return true;
            }
        }
    }
    return {
        updateCount,
        clear,
        isValidToAnswer,
        getCount,
    }
}