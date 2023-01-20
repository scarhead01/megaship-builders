import React from 'react'
import styled from 'styled-components'
import bataan from '../assets/ShipyardLocation/bataan.jpg'
import leyte from '../assets/ShipyardLocation/leyte.jpg'

const ShipyardLocation = () => {
  return (
    <Con>
       <div className="firstCon">
       <div className="container">
            <div className="leyte">
            <h2>Leyte Shipyard</h2>
            <div className="leyteContainer">
                    
                    <h3>Started with 2 slipways and is now under going expansion to have slipway number 3 and a graving dock. Once expansion is completed, Leyte Shipyard will have a ship building capacity of 50,000DWT and ship repair capacity of 20,000DWT. Leyte is the first yard of Megaship Builder Incorporated. It started to repair and build vessels with:
                    <br></br>
                    <br></br>                                           
Slipway No. 1
air balloon slipway with up to 5,000 dwt cargo capacity vessel.
210 meters length x 22 meters width
<br></br>
<br></br>
Slipway No. 2
also, air balloon slipway, is a multi-dock slipway with up to 10,000 dwt cargo capacity vessel. Two (2) sets of 75 ton gantry crane will be installed in this slipway
.210 meters length x 57 meters width
<br></br>
<br></br>
Slipway No. 3
a carriage and railway slipway are now under construction which can drydock or build a 50,000 dwt cargo capacity vessel. A 75 tonner JIB crane will be installed in this slipway
500 meters length x 41 meters width
<br/><br/>        
      
</h3>
</div>
</div>
</div>
<div className='secondContainer'>
    <div className="leyteImage">
        <img className='map' src={leyte} alt="" />
    </div>
    <div className="leyteContainer">
        <h3>
    

A three building workshop will be constructed this year 2022 to boost its shipbuilding capacity of bigger ships. CNC cutting machines, bending and shearing machines, automatic welding, 25 ton overhead cranes, 7.5 tons semi gantry and steel processing machinery will be provided.</h3>
    </div>
</div>
</div>


<div className='line'></div>


<div className="bataanFirstCon">
       <div className="bataanContainer">
            <div className="bataan">
            <h2>Bataan Shipyard</h2>
            <div className="bataanImage">
        <img className='map' src={bataan} alt="" />
    </div>
            <div className="bataanTextContainer">
                    
                    <h3>Strategically located near Manila Bay and once construction is finished, it will feature 4 slipways with a ship building capacity of 50,000DWT and ship repair capacity of 20,000DWT. Bataan will be the second yard of Megaship Builder Incorporated. It is strategically located in Mariveles, Bataan of about 43 hectares property near Manila Bay that is 27 nautical miles west of Manila and and 21 nautical miles west of Cavite City where most Philippine Navy ships are stationed. The shipyard will have 4 slipways of up to 10,000 DWT capacity vessel. The slipways will have the following drydock areas:    
</h3>
</div>
</div>
</div>
<div className='bataanSecondContainer'>
    <div className="bataanTextContainer">
        <h3>
Slipway No. 1. 200 meters length x 20 meters width (up to 5,000 dwt vessels)
<br></br>
<br></br>
Slipway No. 2. 200 meters length x 40 meters width (up to 10,000 dwt barges and LCTs)
<br></br>
<br></br>
Slipway No. 3. 200 meters length x 30 meters width (up to 10,000 dwt cargo ships)
<br></br>
<br></br>
Slipway No. 4. 200 meters length x 30 meters width (up to 10,000 dwt cargo ships)
<br></br>
<br></br>
A graving dock of up 50,000 DWT capacity vessel will also be built after the slipways. Its basic dimensions are 200 meter length x 40 meter width x 10 meter draft from MLLW.
</h3>
    </div>
</div>
</div>
    </Con>
  )
}
const Con = styled.div`
    .firstCon{
        display: flex;
        width: 100%;
        margin: auto;
       
        & .container{
        padding: 10px;
        margin: auto;
        width: 100%;
        .leyte{
            width: 100%;
            .leyteContainer{
                width: 100%;
                
                & h3{
                font-size: 18px;    
                padding: 10px;
                color: white;
                line-height: 30px;
            }
            }
            
        }
    }
    .secondContainer {
        width: 100%;
        
     .leyteImage{
        margin-top: 90px;
        .map {
                width:60%;
                align-items: center;
                justify-content:center;
                text-align: center;
                margin-left:20%;

        }
     }
     .leyteContainer {
        width: 100%;
                & h3{
                font-size: 18px;    
                padding: 10px;
                color: white;
                line-height: 30px;
     }
    }
   
    }
}
& .line{
    background-color: white;
    height: 4px;
    width: 50%;
    margin: auto;
    margin-bottom:2%;
}
& .bataanFirstCon{
        display: flex;
        width: 100%;
        margin: auto;
    & .bataanContainer{
        padding: 10px;
        margin: auto;
        width: 100%;
        & .bataan{
             width: 100%;
            & .bataanImage{
               
                    & .map{
                 width:60%;
                align-items: center;
                justify-content:center;
                text-align: center;
                margin-left:20%;
                    }
            }
            & .bataanTextContainer{
                width: 100%;
                h3 {
                font-size: 18px;    
                padding: 10px;
                color: white;
                line-height: 30px;
                }
            }
        }
    }
    & .bataanSecondContainer{
        width: 100%;
        & .bataanTextContainer{
            width: 100%;
            h3{
            font-size: 18px;    
                padding: 10px;
                color: white;
                line-height: 30px;
            }
        }
    }
}
`
export default ShipyardLocation
