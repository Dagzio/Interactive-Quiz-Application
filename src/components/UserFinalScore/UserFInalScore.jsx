

const UserFinalScore = ({points, userCorrectAnswers, questions}) => {
   return <div>
          <p>Congratulations</p>
          <p>Your Score: {points}</p>
          <span>Answers: {userCorrectAnswers} of {questions.length}
           ({(userCorrectAnswers / questions.length) * 100}%)
          </span>
        </div>
};

export default UserFinalScore;