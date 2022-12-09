import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavCon from './components/NavCon'
import MainContent from './components/MainContent'
import AboutUsPage from './components/AboutUsPage'
import bg from './/assets/bg.png';
import background from './/assets/background.png';
import styled from 'styled-components';
import mission from './/assets/mission.png';
import vision from './/assets/vision.png';
import info from './/assets/info.png';
import Management from './components/Management'
import ShipyardLocation from './components/ShipyardLocation'
import ServicePage from './components/ServicePage'

function App() {
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
  < AboutUsPage/>
  <div className="managementPage">
  <h2 className='management'>Management</h2>
  < Management/>
  </div>
  <div className="shipyardPage">
  <h2 className='shipyardLocation'>Shipyard Location</h2>
  < ShipyardLocation/>
  </div>
</div>
<div className="servicePage">
<h1 className='services'>SERVICES</h1>
  < ServicePage/>

</div>
<div className="contactPage">

 <h3>dw</h3>

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
    width: 100%;
    &::-webkit-scrollbar {
  display: none;
}
& .contents{
  background-color: #cadfca70;
  
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
   }
  }
  
  
`
export default App
