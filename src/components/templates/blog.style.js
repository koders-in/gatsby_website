import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';


export const BlogHeaderStyle = styled.div`
width: 100%;
height: 300px;
position: relative;
background-color:  ${props => props.theme.color.red }
`;


export const BlogContentStyle = styled.div`
    background-color: white;
    color: black;
    height: auto;
    padding : 1.3rem;
    text-align: left;

`;
