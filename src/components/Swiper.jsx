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
        src={Supply}
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
                <div className="upper">
                <img className="bg" src={cardBg} alt="bg"/>
                <div className="picture">{item.image}</div>
                </div>
                <div className="background">
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
/* height: 100vh; */
& .swiper{
  width:100%;
  height: 100%;
}
  & .Concard {
    width: 90%;
    background: #8f82c947;
border: 2px solid rgba(0, 0, 0, 0.1);
border-radius: 10px;
& .upper{
  position: relative;
  & .bg{
          width: 80%;
          align-items: center;
          justify-content: center;
          margin: 10%
        }
        & .picture{
          height: 30px;
          & .iconImg{
          width:100%;
          height: 70%;
          bottom: 21.5%;
          position: absolute;
          
          }
        }
}
    & .background{
      
        
        }
        & .infoCard{
            & .name{

            }
            & .positionInfo{
                
            }
        }
    }
  
`;

