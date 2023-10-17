
const Question = ({ questions }) => {
    return <div>
        {questions.map(question => {
            return <p key={question.id}>{question.question}</p>
        })}
    </div>
};

export default Question;