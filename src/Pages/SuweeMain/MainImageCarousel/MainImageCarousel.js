import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './MainImageCarousel.scss';
import { CAROUSEL_DATA } from '../../SuweeMain/mainData';

const MainImageCarousel = () => {
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {CAROUSEL_DATA.map((carouselData) => (
          <div key={carouselData.id} className='imageContainer'>
            <img src={carouselData.imageUrl} alt='pointImage' />
            <div className={`textContainer `}>
              <div
                className={`largeText ${
                  carouselData.isDark ? 'whiteText' : ''
                }`}>
                {carouselData.title.map((title, idx) => (
                  <p key={idx}>{title}</p>
                ))}
              </div>
              <div
                className={`smallText ${
                  carouselData.isDark ? 'whiteText' : ''
                }`}>
                {carouselData.context.map((context, idx) => (
                  <p key={idx}>{context}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;

  height: 380px;
`;
export default MainImageCarousel;
