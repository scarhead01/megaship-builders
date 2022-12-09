import React from 'react'
import styled from 'styled-components'
import building from '../assets/Services/building.jpg'
import conversion from '../assets/Services/conversion.jpg'
import drafting from '../assets/Services/drafting.jpg'
import fabrication from '../assets/Services/fabrication.jpg'
import mechanical from '../assets/Services/mechanical.jpg'
import repair from '../assets/Services/repair.jpg'
const service = [
    {   
        image:(
            <img src={building} className="serviceImg" alt="" />),
        serviceHeader:"SHIP BUILDING",
        textDesc:"With its competitive pricing and product quality, our yard will be laid out with slipways of different capacities and a bigger graving dock to cater present and future shipbuilding needs throughout the Philippine Archipelago"
    },
    {   
        image:(
            <img src={repair} className="serviceImg" alt="" />),
        serviceHeader:"SHIP REPAIR",
        textDesc:"With a strong commitment to Quality, Health, Safety, Environment and Security, Megaship Builders Inc. yards are dedicated to the growing shipping fleet of sister companies strategically spread-out through the country. However, our facilities will also be available to the drydocking and other repair works of other local and even international shipping companies as an alternative quality but affordable ship repair facility."
    },
    {   
        image:(
            <img src={conversion} className="serviceImg" alt="" />),
        serviceHeader:"SHIP CONVERSION",
        textDesc:"Capable of ship modifications and ships conversions, our team is committed to deliver on our client’s stringent requirements."
    },
    {   
        image:(
            <img src={drafting} className="serviceImg" alt="" />),
        serviceHeader:"DRAFTING AND DESIGN",
        textDesc:"Drafting and Design Services Team is composed of different Engineering Professionals that will cater the ship owners need for design and detail drawings in their new building, modification, conversion or new machinery installation proposal/plan. The team is equipped and trained with the latest marine design software applications."
    },
    {   
        image:(
            <img src={mechanical} className="serviceImg" alt="" />),
        serviceHeader:"MECHANICAL WORKS",
        textDesc:"Mechanical Works Team is also composed of skilled individuals experienced in propulsion, rudder, valve reconditioning, engine room piping works, and propeller repair works. A machine shop with variety and comprehensive tools, equipment, and machinery is provided to equip their works."
    },
    {   
        image:(
            <img src={fabrication} className="serviceImg" alt="" />),
        serviceHeader:"FABRICATION WORKS",
        textDesc:"We have a well-trained team of structural welders and filters who can cater fabrication works such as vessel accommodation, ship blocks, vessel modifications and structural works."
    },
]
const ServicePage = () => {
  return (
    <Con>
        <div className="cardCon">
            {service.map((item,i)=>{
                return(
                   <div className="wrapper">
                    <div className="shadow">
                        {item.image}
                    </div>
                    <div className="textWrapper">
                      <div className="label">
                      <h3 className='head'>{item.serviceHeader}</h3>
                      </div>
                        <h3>{item.textDesc}</h3>
                    </div>
                   </div> 
                )
            })}
        </div>
    </Con>
  )
}
const Con = styled.div`
width: 100%;
    & .cardCon{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        & .wrapper{
        width:230px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        height: 380px;
        margin: auto;
        margin-top: 10px;
       // padding: 50px;
        & .shadow{
        display: flex;
        align-items: center;
        justify-content: center;  
        width: 100%;  
           & .serviceImg{
                position: relative;
                margin:  auto;
                width: 100%;
                border-radius: 5px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
            }
            } 
            & .textWrapper{
           
           display: flex;
           flex-direction: column;
           
           & .label{
            height: 25px;
           }
           & h3{
                font-size: 10px;
                color: #1b1b1b;
                text-align: center;
                line-height: 15px;
                margin: 10px 15px;
                white-space: wrap;
                text-overflow: ellipsis;
                font-weight: 400;
                &.head{
                    font-weight: 900;
                }
            }
            padding-bottom: 10px;
          }  
        }
    }
`
export default ServicePage
