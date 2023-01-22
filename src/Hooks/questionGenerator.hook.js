import {randomIndex} from "../utils/randomIndex.util"

export function useQuestionGenerator (words) {
    
    const questionType = Math.random() > 0.5 ? "word" : "translate"; //انتخاب رندوم بین کلمه یا ترجمه برای صورت سوال
    const questionObj = randomIndex(words);
    const question = questionObj[questionType];
    const validAnswer = questionType === "word" ? questionObj.translate : questionObj.word;
    //انتخاب سه آیتم رندوم برای گزینه های سوال به نسبت تایپ صورت سوال
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