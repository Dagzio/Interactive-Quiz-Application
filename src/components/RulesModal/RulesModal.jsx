import { useState } from 'react';
import { Backdrop, ModalWindow, Overlay } from './RulesModal.styled';

const StartRules = ({ onClose }) => {
  // const [showModal, setShowModal] = useState(true);
  const [showAgain, setShowAgain] = useState(false);

  const handleCheckboxChange = () => {
    setShowAgain(!showAgain);
  };

  return (
    <Backdrop>
      <Overlay>
        <ModalWindow>
          <div>
            <h2>Welcome to the interactive quiz.</h2>
            <p>Read these rules before you start:</p>
            <ol>
              <li>
                <p>The quiz consists of 10 questions</p>
              </li>
              <li>
                <p>Each correct answer gives + 1000 points</p>
              </li>
              <li>
                <p>Each wrong answer takes away - 700 points</p>
              </li>
              <li>
                <p>
                  If you do not answer in time after the timer expires, you will
                  lose - 500 points.
                </p>
              </li>
              <p>Good luck!</p>
            </ol>
            <label>
              <input
                type="checkbox"
                checked={showAgain}
                onChange={handleCheckboxChange}
              />
              Do not show me again this message
            </label>
            <button type="button" onClick={onClose}>
              OKAY
            </button>
          </div>
        </ModalWindow>
      </Overlay>
    </Backdrop>
  );
};

export default StartRules;
