import { useState } from 'react';
import useSound from 'use-sound';
import Question from '../Question/Question';
import Timer from '../Timer/Timer';
import UserPoints from '../UserPoints/UserPoints';
import {correct, incorrect , end} from '../../mp3/sounds'
import { ButtonList, AnswerBtn, ListItem, ResetBtn } from './Answers.styled';


const colors = ['#3393d3', '#d84636', '#2ecc71', '#f39c12'];

const Answers = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const question = questions[currentQuestion];


  const [playCorrect] = useSound(correct);
  const [playIncorrect] = useSound(incorrect);
  const [playEndRound] = useSound(end);


  const handleOptionClick = selectedOption => {
    if(selectedOption === question.correctAnswer) {
      playCorrect();
      setPoints(points + 1000)
    }
      else {
        playIncorrect();
        setPoints(points - 1000);
      }
    

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

      {currentQuestion < questions.length ? (
        <>
        
        <Timer onTimeout={handleTimeout} points={points}/>
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
          
          <UserPoints points={points} />
        </>
      ) : (
        playEndRound(),
        <ResetBtn onClick={() => resetQuiz()}>Play Again?</ResetBtn>
      )}
      
    </div>
  );
};

export default Answers;
