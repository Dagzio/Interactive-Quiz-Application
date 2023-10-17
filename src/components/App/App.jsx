import Question from "components/Question/Question";
import questions from '../Question/questions.json'

const App = () => {
  return (
    <div>
      <Question questions={questions} />
    </div>
  );
};
export default App;