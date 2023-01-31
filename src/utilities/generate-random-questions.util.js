import { randomIndex } from "./generate-random-index.util";

import { WORDS } from "../constants/words.constant";

export function generateRandomQuestions(count) {
  const questionType = Math.random() > 0.5 ? "word" : "translate"; //انتخاب رندوم بین کلمه یا ترجمه برای صورت سوال

  let questionList = [];

  for (let i = 0; i < count; i++) {
    const questionObj = randomIndex(WORDS);

    //todo :  validate unique question per quiz

    const question = questionObj[questionType];
    const correctAnswer =
      questionType === "word" ? questionObj.translate : questionObj.word;

    const choices = [correctAnswer];

    for (let i = 0; i < 3; i++) {
      const itemObj = randomIndex(WORDS);
      if (itemObj[questionType] === question) {
        i--;
      } else {
        choices.push(
          questionType === "word" ? itemObj["translate"] : itemObj["word"]
        );
      }
    }

    let correctAnswerIndex = Math.floor(Math.random() * 3);

    let temp = choices[0];
    choices[0] = choices[correctAnswerIndex];
    choices[correctAnswerIndex] = temp;

    questionList.push({
      // Id: questionObj.id,
      // type: questionType,
      question,
      correctAnswerIndex,
      choices,
    });
  }

  return questionList;
}
