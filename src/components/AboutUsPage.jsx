import React from 'react'
import styled from 'styled-components';
import office from '../assets/office.png';

const AboutUsPage = () => {
  return (
    <Con>
    <div className="aboutUs">
        <div className="officeImg">
        <img className='office'
              src={office}
              alt="office"
            />
        </div>
        <div className="description">
            <div className="box">
                <h3 className='information'>In year 2012 the company was registered as a shipbuilder and repair facility. With the continuous capability building and technology upgrading, the facility started ship-building operations and has two operational balloon type launching and on-going slipway. The company envisions itself as one of the major players in meeting up the demands of maritime industry in the Philippines in the near future.</h3>
            </div>
        </div>
    </div>
    </Con>
  )
}
const Con = styled.div`
& .aboutUs{
    display: flex;
    width: 100%;
    .officeImg{
        margin:15px;
        position: relative;
        width: 100%;
        .office{
            height: 100%;
            width: 100%;
            margin: auto;
            display: flex;
        }
    }
    .description{
        display: flex;
        .box{
            margin: auto 2rem;
            justify-content: center;
            width: 100%;
            border-radius: 10px;
            background: rgba(162, 200, 236, 0.85);
            h3{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                position: relative;
                align-items: center;
                text-align: center;
                justify-content: center;
                color: #000000;
                
            }
        }
    }
}
`
export default AboutUsPage
