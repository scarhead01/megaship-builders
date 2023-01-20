import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styled from 'styled-components'
import clientBg from '../assets/Clients/clientBg.png';

const ClientList=[
    {   
        image:(
            <img src="http://www.megashipbuilders.com/wp-content/uploads/2022/05/client1.jpg" className="serviceImg" alt="" />),
        shipName:"SHIP BUILDING",
        shipInfo:[
            {
                company:"Company: Medallion Transport Inc",
                type:"Project Type: Annual Drydocking",
                particular:"Vessel Particulars: (L) 55 M (B) 12.50 M (D) 2.80 M",
                vesselType:"Vessel Type: Cargo"
            }
        ]
        
    },
]
const Clients = () => {
  return (
    <Con>
        
        <div className="pages"
    
    style={{
      backgroundImage: `url(${clientBg})`,
      objectFit:"cover",
      backgroundRepeat:"np-repeat",
      backgroundSize:"100vw 100vh"
    }}
    >
        <h3 style={{color:"black"}}>CLIENTS</h3>
    <div className="content">
        {ClientList.map((item,i)=>{
            return(
                <div className="wrapper">
                    <div className="shipImage">
                        {item.image}
                    </div>
                </div>
            )
            })}
    </div>
    </div>
    </Con>
  )
}
const Con = styled.div`
& .content{
  background-color: #fccc0c5c;
  
  width: 90%;
  margin: auto;
  margin-top: 10px;
  height: 100%;
  
}
.pages{position: relative;
    max-height: 100vh;
    height: 100vh;
    overflow-y:scroll ;
    overflow-x: hidden;
    width: 100%;}
`

export default Clients