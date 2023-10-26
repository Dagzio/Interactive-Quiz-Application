import * as ReactDOM from 'react-dom';
import RulesModal from "components/RulesModal/RulesModal";
import { MainPageHPQuiz, MainPageSMQuiz, MainPageWrapper, MainPageList, MainPageListItem,SpanWrapper, TextWrapper } from "./MainPage.styled";
import { useState } from 'react';


const MainPage =() => {

    const [isOpen, setIsOpen] = useState(true);

    const onClose = () => {
        setIsOpen(false);
      };

    return  <MainPageWrapper>

        <nav>
            <MainPageList>
                <MainPageListItem><MainPageHPQuiz to={'quiz/harry-potter'}>Harry Potter</MainPageHPQuiz></MainPageListItem>
                <SpanWrapper><TextWrapper>OR</TextWrapper></SpanWrapper>
                <MainPageListItem><MainPageSMQuiz to={'quiz/super-mario'}>Super Mario</MainPageSMQuiz></MainPageListItem>
            </MainPageList>
        </nav>

        {isOpen &&
        ReactDOM.createPortal(
          <RulesModal onClose={onClose}/>,
          document.querySelector('#rules-modal-root')
        )}
    </MainPageWrapper>
   

    

};

export default MainPage;