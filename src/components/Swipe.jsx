import React, { useRef, useSate } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Resource from '../assets/ManagementPics/Resource.png'
import national from '../assets/ManagementPics/national.png'
import Supply from '../assets/ManagementPics/Supply.png'
import cardBg from '../assets/cardBg.svg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
const featureCard = [
  {
    image: (
      <img
        src={national}
        className="iconImg" alt=""
      />
    ),
    information: "Christian Nicole Nakazawa",
    position: "PREMIUM LANDS CORP.",
  },
  {
    image: (
      <img
        src={Resource}
        className="iconImg" alt=""
      />
    ),
    information: "Berna Grace Dianne Nadal",
    position: "PREMIUM MEGASTRUCTURES INC.",
    
  },
  {
    image: (
      <img
        src={Supply}
        className="iconImg" alt=""
      />
    ),
    information: "Trisha Ellamarie Mateo",
    position: "MEGASHIP BUILDERS INC.",
  },
  {
    image: (
      <img
        src="https://obanana.com/wp-content/uploads/2022/03/CLIENTS-09.jpg"
        className="iconImg"
      />
    ),
    information: "Czarina de Chavez",
    position: "INDUSTRY MOVERS CORP.",
  },
];
export default function ImageSlider() {
  return (
    <Con>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        // centeredSlides={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          512: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
      >
        {featureCard.map((item, i) => {
          return (
            <SwiperSlide>
              <div className="Concard">
                <div className="background">
                    <img src={cardBg} alt="" className="bg"/>
                  <div className="picture">{item.image}</div>
                  <div className="infoCard">
                    <div className="name">{item.information}</div>
                    <div className="positionInfo">{item.position}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Con>
  );
}
const Con = styled.div`
& .swiper{
  
  width:100%;
}
  & .Concard {
    width: 80%;
    height: 350px;
    position: relative;
    border: 1px solid #8b7f7f34;
    box-shadow: 1px 1px 6px 2px rgba(0, 4, 0, 0.6);
    border-radius: 5px;
    padding-top: 30px;
    margin: auto;
    display: flex;
    z-index: 1;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    & .background {
      /* width: 100%; */
      /* min-width: 250px; */
      width:70%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      @media (max-width: 768px) {
        width: 150px;
      }
      & .bg{
        height: 65%;
      }
      & .infoCard {
        display: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 180px;
        overflow: hidden;
        & .name {
          width: 180px;
          font-size: 0.8rem;
          font-weight: 700;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        }
        & .positionInfo {
          white-space: nowrap;
          font-size: 0.8rem;
          width: 180px;
          text-align: center;
          text-overflow: ellipsis;
        }
      }
    }
    & img {
      position: absolute;
      margin: auto;
      width: 100%;
      height: 70%;
      z-index: 10;
     
    }
  }
  & .iconImg {
    height: 7rem;
  }
`;

