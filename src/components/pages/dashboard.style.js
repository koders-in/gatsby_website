
import styled, { keyframes } from "styled-components";
import background from '../../images/background.jpg';

export const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
export const MiddleText = styled.div`
animation-name: ${breatheAnimation };
`;

export const MainContainer = styled.div`
    position:absolute;
    height:auto;
    width:100%;
    margin: 0;
    padding: 0;
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -100;
`;

export const Container = styled.section`
  overflow: hidden;
  z-index: 0;
  background-image: none;
  position: relative;
  height: ${props => props.primary ? 'auto' : '100%' };
  width: 100%;
  background-color: white;
  font-family: open sans,sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  overflow-x: hidden;
  text-align: center;
  padding: ${props => props.primary ? '2rem' : 'none' };

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
background-image: url(${background });

`;
