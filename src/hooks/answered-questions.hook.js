import { useDispatch, useSelector } from "react-redux";

export function useAnsweredQuestions() {
  const dispatch = useDispatch();
  const answeredList = useSelector((state) => state.answeredList);

  function addQuestion(question, userAnswer) {   
    
    dispatch({
      type: "ANSWEREDLIST/ADD",
      payload: {
        ...question,
        userAnswer,
      },
    });

    localStorage.setItem(
      "answeredQuestions",
      JSON.stringify(answeredList)
    );
  }

  function getAnsweredList() {
    return JSON.parse(localStorage.getItem("answeredQuestions"));
  }

  return {
    addQuestion,
    getAnsweredList,
  };
}
