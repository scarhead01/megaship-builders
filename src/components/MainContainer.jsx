import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import NavCon from './NavCon'
import MainContent from './MainContent'
import AboutUsPage from './AboutUsPage'
import bg from '../assets/bg.png';
import background from '../assets/background.png';
import styled from 'styled-components';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';
import info from '../assets/info.png';
import wave from '../assets/wave.png';
import blue from '../assets/blue.svg';
import yellow from '../assets/yellow.svg';
// import Management from './components/Management'
import ShipyardLocation from './ShipyardLocation'
import ServicePage from './ServicePage'
import ImageSlider from './Swiper'
import ContactUs from './ContactUs'
import Clients from './Clients'
// import image3 from './assets/ContactPics/image3.png'

function MainContainer() {
  const [count, setCount] = useState(0)

  return (
    <Con>
    <div className="App">
     
      <div className='background-img'>
      <img
              src={bg}
              alt="background"
            />
             <div className="shadow"> </div>
      </div>
   <div className='header'>
   < NavCon/>
   < MainContent/>
   
   </div>
    </div>
    <div className="pages"
    
    style={{
      backgroundImage: `url(${background})`,
      objectFit:"cover",
      backgroundRepeat:"np-repeat",
      backgroundSize:"100vw 100vh"
    }}
    >
    
   
  <div className="contents">
  
  <div className="home">
   
  
      <div className="missionVision">
     
  <img className='mission'
              src={mission}
              alt="mission"
            />
            <img className='mission'
              src={vision}
              alt="vision"
              
            />
          
    </div>
    < div className="info">
    <img className='infor'
              src={info}
              alt="info"
            />
      </div>
<div className="aboutUspage">
  <h1 className='aboutUs'>ABOUT US</h1>
  <img className='wave'
              src={wave}
              alt="wave"
            />
  < AboutUsPage/>
  <div className="managementPage">
  <h2 className='management'>Management</h2>
  <div className='teamCon'>
    <div className="teamQuote">
      <h3 className='quoteHeader'>
        Meet Our Team
      </h3>
      <h3 className='quote'>
      The strength of the team is each individual member. 
      The strength of each memberis the team </h3>
      <h3 className='quoteName'>
      Phil Jackson </h3>
    </div>
    <div className="slider">
    < ImageSlider/>
    </div>
  </div>
  </div>
  <div className="shipyardPage">
  <img className='blue'
              src={blue}
              alt="blue wave"
            />
            <img className='yellow'
              src={yellow}
              alt="yellow wave"
            />
  <h2 className='shipyardLocation'>Shipyard Location</h2>
  <div className="shipCon">
  < ShipyardLocation/>
  </div>
  </div>
</div>
<div className="servicePage">
<h1 className='services'>SERVICES</h1>
  < ServicePage/>
</div>
<div className="contactPage">
 <h3>Contact Us</h3>

<div className="contactUs">
<ContactUs/>
</div>
</div>
    </div>
  </div>
    
  </div>

    </Con>
    
    
    
  )
}

const Con=styled.div`
width: 100%;
background: rgba(49, 49, 49, 0.5);

  & .background-img{
    position: absolute;
    & img{
     width: 100%;
     height: 100vh;
    
    }
  & .shadow{
background: rgba(49, 49, 49, 0.5);
position: absolute;
width: 100%;
height: 100vh;
left: 0px;
top: 0;}
  }
  

  & .header{
    position: relative;
    z-index: 2;
    height: 100vh;
  }

  & .pages{
    position: relative;
    max-height: 100vh;
    height: 100vh;
    overflow-y:scroll ;
    overflow-x: hidden;
    width: 100%;
    &::-webkit-scrollbar {
  display: none;
}
& .contents{
  background-color: #8d8d7b6c;
  
  width: 90%;
  margin: auto;
  margin-top: 10px;
  
}
    & .home{
      margin: auto;
      align-items: center;
    justify-content: center;
    & .card{
      background-color: aquamarine;
      width: 30px;
     
    }
   & .missionVision{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mission{
      height: 40%;
      width: 30%;
    }
   }
   & .info{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;
    .infor{
      height: 40%;
      width: 30%;
    }
   }
   & .aboutUspage{
    & .wave{
      position: absolute;
      opacity: 0.3;
      width: 80%;
      height: 80%;
      left: 33%;
      top: 85%;
      bottom: 15%;
      right: 77%;
    }
    & .managementPage{

      & .teamCon{
        display: inline-flex;
        margin: auto;
        width: 100%;
        
       & .teamQuote{
          width: 20%;
          margin: auto;
          .quoteHeader{
          
          }
          .quote{

          }
          .quoteName{

          }
        }
        & .slider{
          width: 70%;
        }
      }
    }
    & .shipyardPage{
      .blue{
        position: absolute;
          width: 50%;
          top: 1500px;
          z-index: 1;
        }
        .yellow{
        position: absolute;
          width: 50%;
          top: 2400px;
          left: 45%;
          z-index: 1;
        }
      .shipyardLocation{
      }
      .shipCon{
        z-index: 10;
      }
     
    }
   
   }
   }
   & .contactPage{
    
  
      & .contactUs{
       
        
      }
    }
  }
  
  
`
export default MainContainer
