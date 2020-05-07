import React from "react";
import PropTypes from "prop-types";

import { Container } from './dashboard.style';

import { WorkContainer, WorkContainerItems, WorkContainerCards, WorkContainerInnerItems } from './work.style';

import withScrollReveal from 'react-scrollreveal';

import { workCards } from '../animate/workContainerAnimate.style';
import { ServiceTextStyle } from './service.style';

class WorkDefaultContainer extends React.Component {


  render () {
    const { animationContainerReference } = this.props;

    return (
      <>
        <Container ref={ animationContainerReference } primary style={ { backgroundColor: '#070707' } }>
          <ServiceTextStyle className='mb-5'>
            <div style={ { width: '40%' } }>
              <h1 style={ { marginBottom: '1.5rem', color: 'white' } }>Our Work</h1>
              <p style={ { color: '#DCDCDC' } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
            </div>
          </ServiceTextStyle>
          <WorkContainer>
            <WorkContainerItems style={ { width: "25%", flex: '0 0 25%' } }>

              <WorkContainerCards className="sr-item--sequence" />

            </WorkContainerItems>

            <WorkContainerItems style={ { width: "50%", flex: '0 0 50%', height: '500px' } } primary>
              <WorkContainerInnerItems>

                <WorkContainerCards primary className="sr-item--sequence" />
                <WorkContainerCards primary secondary className="sr-item--sequence" />

              </WorkContainerInnerItems>
              <WorkContainerInnerItems>
                <WorkContainerCards primary primary className="sr-item--sequence" />

                <WorkContainerCards primary secondary primary className="sr-item--sequence" />

              </WorkContainerInnerItems>

            </WorkContainerItems>

            <WorkContainerItems style={ { width: "25%", flex: '0 0 25%' } }>

              <WorkContainerCards primary className="sr-item--sequence" />

            </WorkContainerItems>

          </WorkContainer>
        </Container>
      </>
    );
  }
};


WorkDefaultContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withScrollReveal( workCards )( WorkDefaultContainer );
