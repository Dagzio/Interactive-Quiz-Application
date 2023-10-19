import { QuestionBar, QuestionContent } from "./Question.styled";

const Question = ({ content }) => {
    return <QuestionBar>
       <QuestionContent>{content}</QuestionContent>
    </QuestionBar>
};

export default Question;