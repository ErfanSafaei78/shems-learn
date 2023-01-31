//ionic components
import { IonContent, IonPage, IonBadge } from "@ionic/react";

//Hooks
import { useEffect, useMemo, useState } from "react";

//Shared Hooks
import { useTimer } from "../../hooks/timer.hook";
import { useQuestionCounter } from '../../hooks/question-counter.hook'
import { useAnsweredQuestions } from "../../hooks/answered-questions.hook";

//components
import { Question } from "./components/Question";
import { Button } from "../../components/Button";

//Utils
import { generateRandomQuestions } from "../../utilities/generate-random-questions.util";

export function Quiz() {
  
  const info = {
    startTimer: 10,
    minTimeAlart: 3,
    questionCountPerQuiz: 5,
  };

  //Timer
  const timer = useTimer(info.startTimer);
  // useEffect(() => {
    //   timer.start();
    // }, []);

  //User Answer Handle
  const [userAnswer, setUserAnswer] = useState(null);

  function handleUserAnswer(userAnswer) {
    setUserAnswer(userAnswer);
  }
  
  //Generate Questions
  const questionCounter = useQuestionCounter();
  const counterState = useQuestionCounter().getCount();
  
  const questions = useMemo(() => {
    return generateRandomQuestions(info.questionCountPerQuiz - (counterState.counter-1));
  }, [])
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestion = questions[activeQuestionIndex];
  
  //Handllers
  const asnweredList = useAnsweredQuestions();
  
  function nextClickHandller() {
    asnweredList.addQuestion(activeQuestion,userAnswer);
    questionCounter.updateCount(counterState.counter +1);
    setActiveQuestionIndex(index => index + 1);
    setUserAnswer(null);
  }
  
  function finishClickHandller() {
    asnweredList.addQuestion(activeQuestion,userAnswer);
    questionCounter.updateCount(counterState.counter +1);
    setUserAnswer(null);
  }

  
  return (
    <>
      <IonPage>
        <IonContent fullscreen>
          <IonBadge
            color={timer.value <= info.minTimeAlart ? "danger" : "primary"}
          >
            {timer.value}
          </IonBadge>
          {
            <>
              <Question
                handleUserAnswer={handleUserAnswer}
                title={activeQuestion.question}
                choices={activeQuestion.choices}
              />
              <Button
                color="success"
                value={activeQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                onClick={activeQuestionIndex === questions.length - 1 ? () => { finishClickHandller() } : () => (nextClickHandller())}
              />
            </>
          }
        </IonContent>
      </IonPage>
    </>
  );
}
