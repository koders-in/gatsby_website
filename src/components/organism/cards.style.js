import styled from "styled-components";


export const CardHeaderStyle = styled.div`
  text-align: ${props => props.primary ? 'left' : 'center'};
  padding:  ${props => props.primary ? '1rem' : 0};
    `;

export const CardContentStyle = styled.div`
  text - align: left;
padding: 1rem;

`;
