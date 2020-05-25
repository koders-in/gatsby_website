import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'


import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { IMAGE } from '../constants/images';
import Images from '../atoms/Images';
import { WorkContainerItems, WorkContainerCards, WorkContainerInnerItems } from './work.style';


const WorkContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.WORK }
      quote={ HEADER.QUOTE }
      primary
    >
      
      <Carousel
        autoPlay={true}
      >
        <div>
            <WorkContainerItems style={ { width: "25%", flex: '0 0 25%' } }>
              <WorkContainerCards className="sr-item--sequence" >
                <img src={ IMAGE.UNITY } />
              </WorkContainerCards>
              <WorkContainerCards className="sr-item--sequence" >
                <img src={ IMAGE.UNITY } />
              </WorkContainerCards>
            </WorkContainerItems>
              <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={ IMAGE.UNITY } />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Images src={ IMAGE.PARKING } />
          <p className="legend">Legend 3</p>
        </div>
        
      </Carousel>

      {/* <WorkContainerItems style={ { width: "25%", flex: '0 0 25%' } }>

        <WorkContainerCards className="sr-item--sequence" >
          <Images src={ IMAGE.UNITY } />
        </WorkContainerCards>



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

        <WorkContainerCards primary className="sr-item--sequence" >
          <Images src={ IMAGE.PARKING } />
        </WorkContainerCards>



      </WorkContainerItems> */}
    </DefaultTemplate>
  </>
  );
};
export default WorkContainer;
