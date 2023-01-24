import { useDispatch, useSelector } from "react-redux";

export function useAnsweredQuestions() {
  const dispatch = useDispatch();
  const answeredQuestions = useSelector((state) => state.answeredQuestions);

  function addQuestion(questionObj, userAnswer) {
    dispatch({
      type: "ANSWEREDLIST/ADD",
      payload: {
        ...questionObj,
        userAnswer
      }
    });

    localStorage.setItem(
      "answeredQuestions",
      JSON.stringify(answeredQuestions)
    );
  }

  function getAnsweredList() {
    return JSON.parse(localStorage.getItem("answeredQuestions")) || [];
  }

  return {
    addQuestion,
    getAnsweredList,
  };
}
