import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/DefaultTemplate';
import { WorkContainerItems, WorkContainerCards, WorkContainerInnerItems } from './work.style';


const WorkContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.WORK }
      quote={ HEADER.QUOTE }
      primary
    >
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
    </DefaultTemplate>
  </>
  );
};
export default WorkContainer;
