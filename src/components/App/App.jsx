import questions from '../Question/questions.json'
import Answers from "components/Answers/Answers";
import { Container, Main } from './App.styled';

const App = () => {
  return (
    <Container>
      <Main>
      <Answers questions={questions} />
      </Main>
    </Container>
  );
};
export default App;