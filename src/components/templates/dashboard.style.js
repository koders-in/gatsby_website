
import styled, { keyframes } from "styled-components";
import background1 from '../../images/background1.jpg';
import background from '../../images/background.jpg';
import background2 from '../../images/background2.jpg';

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
export const ImageStyle = styled.img`
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
    width: 1349px;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    margin-top: 0px;
    transform: translate3d(0px, 0px, 0px);

`;


export const BackgroundImageStyle = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${background1 });
  margin:0;
  padding:0;
  z-index: -10;
`;
