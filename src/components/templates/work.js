import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { IMAGE } from '../constants/images';
import Images from '../atoms/Images';
import Cards from '../organism/cards';
import { CardSContainer, WorkContentStyle } from './work.style';

const WorkContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<>
    <DefaultTemplate
      title={HEADER.WORK}
      quote={HEADER.QUOTE}
      primary
      isWork
    >
      <Carousel activeIndex={index} onSelect={handleSelect}
        style={{ height: '380px', marginLeft: '-5rem' }}>
        <Carousel.Item>
          <CardSContainer>
            <Cards
              header={
                <Images src={IMAGE.UNITY} />
              }
              isWork>
              <WorkContentStyle>
                 A game made on unity about the life of a ball
              </WorkContentStyle>
            </Cards>
            <Cards
              header={
                <Images src={IMAGE.PARKING} />
              } isWork>
              <WorkContentStyle>
                 Tour Guide for shortest path
              </WorkContentStyle>
            </Cards>
          </CardSContainer>
        </Carousel.Item>

        <Carousel.Item>
          <CardSContainer>
            <Cards
              header={
                <Images src={IMAGE.RUSK} />
              } isWork>
              <WorkContentStyle>
                 A website for product advertisement
              </WorkContentStyle>
            </Cards>
            <Cards
              header={
                <Images src={IMAGE.POWERSHELL} />
              } isWork>
              <WorkContentStyle>
                 Powershell script to collect csv data, group, create report and send mail
              </WorkContentStyle>
            </Cards>
          </CardSContainer>
        </Carousel.Item>

        <Carousel.Item>
          <CardSContainer>
            <Cards
              header={
                <Images src={IMAGE.CLOUDISM} />
              } isWork>
              <WorkContentStyle>
                Cloudsim scheduling using Ant Colony Optimization
              </WorkContentStyle>
            </Cards>
            <Cards
              header={
                <Images src={IMAGE.FRAUD} />
              } isWork>
              <WorkContentStyle>
                 Credit card fraud detection system
              </WorkContentStyle>
            </Cards>
          </CardSContainer>
        </Carousel.Item>

      </Carousel>
    </DefaultTemplate>
  </>
  );
};
export default WorkContainer;
