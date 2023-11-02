import { useEffect, useState } from 'react';
import {
  Backdrop,
  ModalWindow,
  Overlay,
  RulesModalList,
  RulesModalText,
  RulesModalLabel,
  RulesModalListText,
  RulesModalTitle,
  WrapperBtn,
  RulesModalBtn,
} from './RulesModal.styled';

const StartRules = ({ onClose }) => {
  const [showAgain, setShowAgain] = useState(true);

 

  useEffect(() => {
    const shouldShowModal = sessionStorage.getItem('showRulesModal');
    if (shouldShowModal === 'false') {
      setShowAgain(false);
    }
  }, []);

  const handleCheckboxChange = () => {
    setShowAgain(!showAgain);
  };



const closeModal = () => {
  const checkModal = document.querySelector('#showModal');

  if(checkModal.checked) {
    sessionStorage.setItem('showRulesModal', showAgain);
    onClose();
  }
}
  
if (!showAgain) {
  return null;
}

  return (
    <Backdrop>
      <Overlay>
        <ModalWindow>
          <div>
            <RulesModalTitle>Welcome to the interactive quiz.</RulesModalTitle>
            <RulesModalText>Read these rules before you start:</RulesModalText>
            <RulesModalList>
              <RulesModalListText>
                <p>The quiz consists of 10 questions</p>
              </RulesModalListText>
              <RulesModalListText>
                <p>Each correct answer gives + 1000 points</p>
              </RulesModalListText>
              <RulesModalListText>
                <p>Each wrong answer takes away - 700 points</p>
              </RulesModalListText>
              <RulesModalListText>
                <p>If you do not answer in time you will lose - 500 points.</p>
              </RulesModalListText>
            </RulesModalList>
            <RulesModalText>Good luck!</RulesModalText>

            <WrapperBtn>
              <RulesModalLabel>
                <input
                  id='showModal'
                  type="checkbox"
                  checked={!showAgain}
                  onChange={handleCheckboxChange}
                />
                Do not show me again this message
              </RulesModalLabel>
              <RulesModalBtn type="button" onClick={closeModal}>
                OKAY
              </RulesModalBtn>
            </WrapperBtn>
          </div>
        </ModalWindow>
      </Overlay>
    </Backdrop>
  );
};

export default StartRules;
