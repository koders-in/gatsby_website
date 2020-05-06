import React from "react";
import PropTypes from "prop-types";

import { Container } from './dashboard.style';

import { WorkContainer, WorkContainerItems, WorkContainerCards, WorkContainerInnerItems } from './work.style';

import withScrollReveal from 'react-scrollreveal';

import { workCards } from '../animate/workContainerAnimate.style';

class WorkDefaultContainer extends React.Component {


  render () {
    const { animationContainerReference } = this.props;

    console.log( "---", window.screen.availHeight );
    return (
      <>
        <Container ref={ animationContainerReference } primary style={ { backgroundColor: '#070707' } }>
          <h1 className="mb-4 text-white">Our Work</h1>

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
