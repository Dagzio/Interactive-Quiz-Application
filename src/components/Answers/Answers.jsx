import { useState } from 'react';
import Question from 'components/Question/Question';
import Timer from 'components/Timer/Timer';
import UserScore from './AnswersStatistic';
import { ButtonList, AnswerBtn, ListItem, ResetBtn } from './Answers.styled';


const colors = ['#3393d3', '#d84636', '#2ecc71', '#f39c12'];

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

 
  const handleTimeout = () => {
   setPoints(points - 1000);
   setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      <UserScore points={points} />
      {currentQuestion < questions.length ? (
        <>
          <Question content={question.question} />
          <ButtonList>
            {question.options.map((option, index) => {
              return (
                <ListItem key={index}>
                  <AnswerBtn color={colors[index]} onClick={() => handleOptionClick(option)}>
                    {option}
                  </AnswerBtn>
                </ListItem>
              );
            })}
          </ButtonList>
          <Timer onTimeout={handleTimeout} points={points}/>
        </>
      ) : (
        <ResetBtn onClick={() => resetQuiz()}>Play Again?</ResetBtn>
      )}
      
    </div>
  );
};

export default Answers;
