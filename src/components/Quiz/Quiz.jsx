import Answers from 'components/Answers/Answers';
import questionsHP from '../Question/questionsHP.json';
import questionsSM from '../Question/questionsSM.json';
import {Container, Main} from '../SharedLayout/SharedLayout.styled'
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { quizType } = useParams();

  let questions;

  switch (quizType) {
    case 'harry-potter':
      questions = questionsHP;
      break;
    case 'super-mario':
      questions = questionsSM;
      break;
    default:
      questions = [];
      break;
  }

  return (
    <Container>

        <Answers questions={questions} />

    </Container>
  );
};

export default Quiz;
