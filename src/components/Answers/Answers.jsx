import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Question from '../Question/Question';
import Timer from '../Timer/Timer';
import UserPoints from '../UserPoints/UserPoints';
import { correct, incorrect, end } from '../../mp3/sounds';
import {
  ContentWrapper,
  ButtonList,
  AnswerBtn,
  ListItem,
  ResetBtn,
} from './Answers.styled';
import { useLocation } from 'react-router-dom';
import UserFinalScore from 'components/UserFinalScore/UserFInalScore';

const colors = ['#3393d3', '#d84636', '#2ecc71', '#f39c12'];

const Answers = ({ questions, soundtrack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [userCorrectAnswers, setUserCorrectAnswers] = useState(0);
  const question = questions[currentQuestion];

  const location = useLocation();

  const quizLocation = location.pathname.indexOf('/quiz/') === 0;

  const [playCorrect] = useSound(correct);
  const [playIncorrect] = useSound(incorrect);
  const [playEndRound] = useSound(end);
  const [playSoundtrack, { stop }] = useSound(soundtrack);

  useEffect(() => {
    quizLocation ? playSoundtrack() : stop();
    return () => {
      stop();
    }
  }, [quizLocation, playSoundtrack, stop]);

  const handleOptionClick = selectedOption => {
    if (selectedOption === question.correctAnswer) {
      playCorrect();
      setPoints(points + 1000);
      setUserCorrectAnswers(userCorrectAnswers + 1);
    } else {
      playIncorrect();
      if (points >= 0 && points <= 700) {
        setPoints(0);
      } else {
        setPoints(points - 700);
      }
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setPoints(0);
    setUserCorrectAnswers(0);
  };

  const handleTimeout = () => {
    if (points >= 0 && points <= 500) {
      setPoints(0);
    } else {
      setPoints(points - 500);
    }
    playIncorrect();
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <ContentWrapper>
      {currentQuestion < questions.length ? (
        <>
          <Timer
            onTimeout={handleTimeout}
            points={points}
            question={currentQuestion}
          />
          <Question content={question.question} />
          <ButtonList>
            {question.options.map((option, index) => {
              return (
                <ListItem key={index}>
                  <AnswerBtn
                    type="button"
                    color={colors[index]}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </AnswerBtn>
                </ListItem>
              );
            })}
          </ButtonList>

          <UserPoints points={points} />
          <button type="button" onClick={() => stop()}>
            STOP
          </button>
        </>
      ) : (
        <>
          {playEndRound()}
          <UserFinalScore
            points={points}
            userCorrectAnswers={userCorrectAnswers}
            questions={questions}
          />
          <ResetBtn onClick={() => resetQuiz()}>Play Again?</ResetBtn>
        </>
      )}
    </ContentWrapper>
  );
};

export default Answers;
