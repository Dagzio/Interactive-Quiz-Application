import Answers from 'components/Answers/Answers';
import questionsHP from '../Question/questionsHP.json';
import questionsSM from '../Question/questionsSM.json';
import { harryPotterSound, superMarioSound } from 'mp3/sounds';
import {Container} from '../SharedLayout/SharedLayout.styled'
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { quizType } = useParams();

  let questions;
  let roundMusic;

  switch (quizType) {
    case 'harry-potter':
      questions = questionsHP;
      roundMusic = harryPotterSound
      break;
    case 'super-mario':
      questions = questionsSM;
      roundMusic = superMarioSound;
      break;
    default:
      questions = [];
      break;
  }

  return (
    <Container>

        <Answers questions={questions} soundtrack={roundMusic}/>

    </Container>
  );
};

export default Quiz;
