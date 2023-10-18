// import Question from "components/Question/Question";
import questions from '../Question/questions.json'
import Answers from "components/Answers/Answers";

const App = () => {
  return (
    <div>
      <Answers questions={questions} />

    </div>
  );
};
export default App;