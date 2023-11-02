import {
  UserScoreText,
  UserScoreWrapper,
  UserScoreTitle,
} from './UserFInalScore.styled';

const UserFinalScore = ({ points, userCorrectAnswers, questions }) => {
  return (
    <UserScoreWrapper>
      <UserScoreTitle>
        {userCorrectAnswers <= 3
          ? "Don't feel bad, try again."
          : 'Congratulations!'}
      </UserScoreTitle>
      <UserScoreText>Your Score: {points}</UserScoreText>
      <UserScoreText>
        Answers: {userCorrectAnswers} of {questions.length} (
        {(userCorrectAnswers / questions.length) * 100}%)
      </UserScoreText>
    </UserScoreWrapper>
  );
};

export default UserFinalScore;
