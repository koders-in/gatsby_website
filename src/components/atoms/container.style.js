
import styled from 'styled-components';
import background1 from '../../images/background1.jpg';
export const ContainerStyle = styled.section`
  overflow: hidden;
  z-index: 0;
  position: relative;
  height: ${props => props.primary ? 'auto' : '100%' };
  width: 100%;
  background-color: white;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  overflow-x: hidden;
  background-color: ${props => props.primary ? '#070707' : '#1A1A1A' } !important;

  text-align: center;
  padding: ${props => props.primary && !props.secondary ? '2rem' : 'none' };
  background:
  url(${props => props.secondary && background1 }) center center;
  background-attachment:${props => props.secondary && 'fixed' } ;

  `;

