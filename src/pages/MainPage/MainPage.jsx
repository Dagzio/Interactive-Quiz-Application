import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import RulesModal from 'components/RulesModal/RulesModal';
import {
  MainPageWrapper,
  MainPageTitle,
  MainPageText,
  MainPageHPQuiz,
  MainPageSMQuiz,
  MainPageList,
  MainPageListItem,
  SpanWrapper,
  TextWrapper,
  ButtonHPIcon,
  ButtonSMIcon,
} from './MainPage.styled';
import icon from '../../img/symbol-defs.svg';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <MainPageWrapper>
      <MainPageTitle>Welcome to Interactive Quiz Application.</MainPageTitle>
      <MainPageText>Change Your Quiz</MainPageText>
      <nav>
        <MainPageList>
          <MainPageListItem>
            <MainPageHPQuiz to={'quiz/harry-potter'}>
              Harry Potter
              <ButtonHPIcon>
                <use href={icon + '#broom'} />
              </ButtonHPIcon>
            </MainPageHPQuiz>
          </MainPageListItem>

          <SpanWrapper>
            <TextWrapper>OR</TextWrapper>
          </SpanWrapper>

          <MainPageListItem>
            <MainPageSMQuiz to={'quiz/super-mario'}>
              Super Mario
              <ButtonSMIcon>
                <use href={icon + '#mario-flag'} />
              </ButtonSMIcon>
            </MainPageSMQuiz>
          </MainPageListItem>
        </MainPageList>
      </nav>

      {isOpen &&
        ReactDOM.createPortal(
          <RulesModal onClose={onClose} />,
          document.querySelector('#rules-modal-root')
        )}
    </MainPageWrapper>
  );
};

export default MainPage;
