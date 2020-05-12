import styled from "styled-components";

export const ReviewContainer = styled.div`
text-align: ${props => props.primary ? 'right' : 'left' };
height: 150px;
width: 80%;
padding: 0 1.5rem;
`;
