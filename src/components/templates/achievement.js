import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/DefaultTemplate';
import Cards from '../organism/cards';


const AchievementContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.ACHIEVEMENT }
      quote={ HEADER.QUOTE }
      secondary
    >
      <Cards
        header={
          <strong style={ { fontSize: '35px', color: '#0C61A5' } }>100</strong>
        }
      >
        <span>Customers are satisfied with our professional support</span>
      </Cards>
      <Cards
        header={
          <strong style={ { fontSize: '35px', color: '#0C61A5' } }>4000</strong>
        } >
        <span>Amazing preset options to be mixed and combined</span>
      </Cards>
      <Cards
        header={
          <strong style={ { fontSize: '35px', color: '#0C61A5' } }>8000</strong>
        } >
        <span>Average response time on live chat support channel</span>
      </Cards>
    </DefaultTemplate>
  </>
  );
};
export default AchievementContainer;
