import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { IMAGE } from '../constants/images';
import { CardSContainer } from './work.style';

const WorkContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<>
    <DefaultTemplate
      title={HEADER.WORK}
      primary="true"
      isWork
    >
      <Carousel activeIndex={index} onSelect={handleSelect}
        style={{ height: 'auto', marginLeft: '-5rem'}}>
        <Carousel.Item>
          <CardSContainer>
            <div class="card" style={{ width: '18rem'}}>
              <img class="card-img-top" src={IMAGE.UNITY} alt="Card" />
              <div class="card-body" style={{ textAlign: 'left' }}>
                A game made on unity about the life of a ball
              </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
              <img class="card-img-top" src={IMAGE.PARKING} alt="Card" />
              <div class="card-body" style={{ textAlign: 'left' }}>
                Tour Guide for shortest path
              </div>
            </div>
          </CardSContainer>
        </Carousel.Item>

        <Carousel.Item>
          <CardSContainer>
            <div class="card" style={{ width: '18rem'}}>
              <img class="card-img-top" src={IMAGE.RUSK} alt="Card" />
              <div class="card-body" style={{ textAlign: 'left' }}>
                A website for product advertisement
              </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
              <img class="card-img-top" src={IMAGE.POWERSHELL} alt="Card" />
              <div class="card-body" style={{ textAlign: 'left' }}>
                Powershell script to collect csv data, group, create report and send mail
              </div>
            </div>
          </CardSContainer>
        </Carousel.Item>

        <Carousel.Item>
          <CardSContainer>
            <div class="card" style={{ width: '18rem'}}>
              <img class="card-img-top" src={IMAGE.CLOUDISM} alt="Card" />
              <div class="card-body" style={{ textAlign: 'left' }}>
                A website for product advertisement
              </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
              <img class="card-img-top" src={IMAGE.FRAUD} alt="Card" />
              <div class="card-body" style={{ textAlign: 'left' }}>
                Powershell script to collect csv data, group, create report and send mail
              </div>
            </div>
          </CardSContainer>
        </Carousel.Item>

      </Carousel>
    </DefaultTemplate>
  </>
  );
};
export default WorkContainer;
