import {randomIndex} from "../utils/randomIndex.util"

export function useQuestionGenerator () {
    
    function generateQuestion(words) {
        const questionType = Math.random() > 0.5 ? "word" : "translate";
        const questionObj = randomIndex(words);
        const question = questionObj[questionType];
        const validAnswer = questionType === "word" ? questionObj.translate : questionObj.word;
        const items = []
        for (let i = 0; i < 3; i++){
            items.push(questionType === "word" ? randomIndex(words)["translate"] : randomIndex(word)["word"])
        }
        return {
            questionId: questionObj.id,
            question,
            items,
            validAnswer
        }
    }

    return { generateQuestion };

}