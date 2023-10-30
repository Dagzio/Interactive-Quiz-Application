import * as ReactDOM from 'react-dom';
import RulesModal from "components/RulesModal/RulesModal";
import { MainPageHPQuiz, MainPageSMQuiz, MainPageList, MainPageListItem,SpanWrapper, TextWrapper, ButtonHPIcon, ButtonSMIcon } from "./MainPage.styled";
import { useState } from 'react';
import icon from '../../img/symbol-defs.svg'


const MainPage =() => {

    const [isOpen, setIsOpen] = useState(true);

    const onClose = () => {
        setIsOpen(false);
      };

    return  <div>
<h1>Change YOur Quiz</h1>
        <nav>
            <MainPageList>
                <MainPageListItem>
                    <MainPageHPQuiz to={'quiz/harry-potter'}>Harry Potter 
                    <ButtonHPIcon>
                        <use href={icon + "#broom"}/>
                    </ButtonHPIcon>
                    </MainPageHPQuiz>
                    </MainPageListItem>

                <SpanWrapper><TextWrapper>OR</TextWrapper></SpanWrapper>

                <MainPageListItem>
                    <MainPageSMQuiz to={'quiz/super-mario'}>Super Mario
                    <ButtonSMIcon>
                        <use href={icon + "#mario-flag"}/>
                    </ButtonSMIcon>
                    </MainPageSMQuiz>
                    </MainPageListItem>

            </MainPageList>
        </nav>

        {isOpen &&
        ReactDOM.createPortal(
          <RulesModal onClose={onClose}/>,
          document.querySelector('#rules-modal-root')
        )}
    </div>
   

    

};

export default MainPage;