
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: url({}) top center;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const HeaderContainerText = styled.div`
  position: absolute;
  bottom: 0;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px 15px;
  background:rgba(46, 49, 49, 1);

`;

export const InnerContentContainer = styled.div`
  width: 70%;
  margin:0;
  padding:0;
`;
