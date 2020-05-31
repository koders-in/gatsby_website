import styled from 'styled-components';

export const StyledHeader1 = styled.h1`
  color: white;
`;

export const StyledHeader4 = styled.h4`
color: ${props => props.blue ? 'rgb(12, 97, 165)' : 'white' };
`;
export const ParagraphStyle = styled.p`
color: ${props => props.primary ? 'grey' : '#DCDCDC' }
`;
