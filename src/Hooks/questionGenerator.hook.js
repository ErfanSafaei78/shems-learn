import {randomIndex} from "../utils/randomIndex.util"

export function useQuestionGenerator (words) {
    
    const questionType = Math.random() > 0.5 ? "word" : "translate"; //انتخاب رندوم بین کلمه یا ترجمه برای صورت سوال
    const questionObj = randomIndex(words);
    const question = questionObj[questionType];
    const validAnswer = questionType === "word" ? questionObj.translate : questionObj.word;
    //انتخاب سه آیتم رندوم برای گزینه های سوال به نسبت تایپ صورت سوال
    const items = [validAnswer]
    for (let i = 0; i < 3; i++){
        const itemObj = randomIndex(words);
        if (itemObj[questionType] === question){
            i--
        }else {
            items.push(questionType === "word" ? itemObj["translate"] : itemObj["word"])
        }
    }
    return {
        questionId: questionObj.id,
        questionType,
        items,
    }
}