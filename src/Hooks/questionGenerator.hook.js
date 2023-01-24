import {randomIndex} from "../utils/randomIndex.util"

export function useQuestionGenerator () {
    
    function generateQuestion(words) {
        const questionType = Math.random() > 0.5 ? "word" : "translate";
        const questionObj = randomIndex(words);
        const question = questionObj[questionType];
        const items = []
        for (let i = 0; i < 3; i++){
            items.push(questionType === "word" ? randomIndex(words)["translate"] : randomIndex(word)["word"])
        }
        return {
            questionId: questionObj.id,
            question,
            items,
        }
    }

    function isAsnwerValid({id, question, userAnswer}) {
        const questionObj = words[id-1];
        if (questionObj.word === question){
            return userAnswer === questionObj.translate ? true : false;
        }else if (questionObj.translate === question) {
            return userAnswer === questionObj.word ? true : false;
        }
    }
    return {
        generateQuestion,
        isAsnwerValid,
    }
}