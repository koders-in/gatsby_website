
import styled from "styled-components";
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
  z-index: 0;
  background-image: none;
  position: relative;
  height: 100vh;
  background-color: white;
  font-family: open sans,sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  overflow-x: hidden;
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
