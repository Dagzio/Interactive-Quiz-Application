import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a1f25;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: scroll;
`

export const Overlay = styled.div`
     z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const ModalWindow = styled.div`
  width: 303px;  
  height: 570px; 
  padding: 12px 16px;
  text-align: center;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);    
  border: none;
  outline: 5px solid #FFF;
  background-color: #1a1f25;
  box-shadow: 0px 4px 16px 0px rgb(191 122 18 / 72%);
  border-radius: 8px;   
 


  @media (min-width: 480px){
    width: 353px;  
    height: 516px;
  };

  @media (min-width: 768px){
    width: 657px; 
    height: 355px;
  }
  `;


  export const RulesModalTitle = styled.h2`
  text-shadow: 2px 3px 3px #000000;
  color:#FFF;
  margin-bottom: 8px;
  `;

  export const RulesModalList = styled.ol`
  padding: 0 16px;
  margin: 0;
  text-align:left;
  font-weight: 700;
  font-size:18px;
  color: #FFF;
  text-shadow: 2px 3px 3px #000000;
  `;

  export const RulesModalListText = styled.li`

  font-size:20px;

  &:last-child{
    margin-bottom: 24px;
  }
  `;

  export const RulesModalText = styled.p`
  margin-bottom: 12px;
  text-align:center;
  text-shadow: 0 0 10px #0aafe6, 0 0 15px rgba(10, 175, 230, 0);
  color:#c2f0f7;

  &:last-child{
    margin-bottom: 18px;
  }

  @media (min-width: 480px){
    &:last-child{
      margin-bottom: 24px;
    }
  }
  `;

  export const RulesModalLabel = styled.label`
  margin-right: 24px;
  text-shadow: 2px 3px 3px #000000;
  color:#FFF;
  margin-bottom: 16px;
  `;

  export const RulesModalBtn = styled.button`
  width: 140px;
  height: 33px;
  border-radius: 4px;
  border: none;
  box-shadow: 9px 8px 15px 0px rgba(0, 0, 0, 0.64);
  cursor:pointer;
  font-weight: 700;
  font-size: 15px;
  
  &:hover{
    background-color: #4747ff;
    color:#FFF;
  }
  &:active {
    box-shadow: inset 0px 1px 8px 0px rgba(48, 48, 48, 1);
  }
  `;

  export const WrapperBtn = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  `;
