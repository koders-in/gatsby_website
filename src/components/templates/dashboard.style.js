
import styled from "styled-components";
import background2 from '../../images/background2.jpeg';

export const HeaderContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${ background2 }) top center;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const HeaderContainerText = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 15px;
  background: rgba(0,0,0,0.7);

`;

export const InnerContentContainer = styled.div`
  width: 70%;
  margin:0;
  padding:0;
`;
