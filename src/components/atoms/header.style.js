import styled from 'styled-components';
// import media from 'styled-media-query';

// const isLargeDevice = () => () =>
//   media.greaterThan( 'medium' )`${ rule }`;

export const StyledHeader1 = styled.h1`
  color: ${props => props.theme.color.white }
`;

export const StyledHeader4 = styled.h4`
  color: ${props => props.theme.color.white }
`;
export const ParagraphStyle = styled.p`
color: ${props => props.primary ? 'grey' : props.theme.color.lightGrey }
`;
