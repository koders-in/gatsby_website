import styled from "styled-components";
import media from 'styled-media-query';

const setFormContainerForSmallDevice = () =>
  media.lessThan( 'large' )`
    margin: 0 4rem;
  `;


export const FormContainerStyle = styled.div`
  text-align: left;
  display: block;
  margin: 0 10rem;
  ${setFormContainerForSmallDevice}
`;

export const InputBox = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  border-radius: 0;
  background: none;
  color: #fff;
  padding-left: 0;
  padding-right: 0;
`;

export const TextArea = styled.textarea`
    border: none;
    border-bottom: 2px solid gray;
    border-radius: 0;
    background: none;
    color: #fff;
    padding-left: 0;
    padding-right: 0;
`

export const Button = styled.button`
    background-color: #0C61A5;
    border-color: #0C61A5;
    padding: 15px 30px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1em;
    border-radius: 30px;
    color: #fff!important;

`
