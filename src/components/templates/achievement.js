import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import Cards from '../organism/cards';


const AchievementContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.ACHIEVEMENT }
      secondary
    >
      <Cards
        header={
          <strong style={ { fontSize: '35px', color: '#0C61A5' } }>79</strong>
        }
      >
        <span>Happy Clients</span>
      </Cards>
      <Cards
        header={
          <strong style={ { fontSize: '35px', color: '#0C61A5' } }>88</strong>
        } >
        <span>Projects Completed</span>
      </Cards>
      <Cards
        header={
          <strong style={ { fontSize: '35px', color: '#0C61A5' } }>71</strong>
        } >
        <span>Cups of Coffee</span>
      </Cards>
    </DefaultTemplate>
  </>
  );
};
export default AchievementContainer;
