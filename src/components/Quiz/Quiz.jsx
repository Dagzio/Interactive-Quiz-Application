import Answers from "components/Answers/Answers";
import questionsHP from '../Question/questionsHP.json'
import questionsSM from '../Question/questionsSM.json'
import { Container, Main } from '../App/App.styled';
import { useParams } from "react-router-dom";




const Quiz = () => {
    const {quizType} = useParams();
    console.log(quizType);

    let questions;

    switch (quizType) {
        case 'harry-potter':
            questions = questionsHP
            break;
        case 'super-mario':
            questions = questionsSM
            break;
        default:
            questions = [];
            break;
    }

    return  <Container>
        <Main>
    <Answers questions={questions} />
        </Main>
</Container>
    
    
};


export default Quiz;