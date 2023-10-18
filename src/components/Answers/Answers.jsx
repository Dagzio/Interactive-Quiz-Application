import { useState } from 'react';
import Question from 'components/Question/Question';

const Answers = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const question = questions[currentQuestion];

  const handleOptionClick = selectedOption => {
    selectedOption === question.correctAnswer
      ? setPoints(points + 1000)
      : setPoints(points - 1000);

    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setPoints(0);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <>
          <Question content={question.question} />
          <ul>
            {question.options.map((option, index) => {
              return (
                <li key={index}>
                  <button onClick={() => handleOptionClick(option)}>
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <button onClick={() => resetQuiz()}>Play Again?</button>
      )}
    </div>
  );
};

export default Answers;
