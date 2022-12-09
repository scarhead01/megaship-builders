import React from 'react'
import styled from 'styled-components'
import natHead from '../assets/ManagementPics/natHead.jpg'
import operationHead from '../assets/ManagementPics/operationHead.jpg'
import sales from '../assets/ManagementPics/sales.jpg'
import hr from '../assets/ManagementPics/hr.jpg'
import supply from '../assets/ManagementPics/supply.jpg'
import accounting from '../assets/ManagementPics/accounting.jpg'
import safety from '../assets/ManagementPics/safety.jpg'
const managementHead = [
        {
            list: [
                {
                    image: (
                        <img
                          src={natHead}
                          className="managementImg" alt="natHead"
                        />
                      ),
                    name:"ENGR. ARVI VINCENT SUROYSUROY ",
                    position: "National Head",
                    
                }    
          ]
        },
        {
            list: [
                {
                    image: (
                        <img
                          src={operationHead}
                          className="managementHead" alt="Heads"
                        />
                      ),
                    name:"ENGR. DUNN JUMAO-AS",
                    position: "Operations Head",
                    
                },
                {
                    image: (
                        <img
                          src={sales}
                          className="managementHead" alt="Heads"
                        />
                      ),
                    name:"ENGR. TRISHA ELLMARIE MATEO​",
                    position: "Sales and Marketing Head",
                    
                },
                {
                    image: (
                        <img
                          src={hr}
                          className="managementHead" alt="Heads"
                        />
                      ),
                    name:"RONN MERCADO",
                    position: "Human Resource Head",
                    
                },
                {
                    image: (
                        <img
                          src={supply}
                          className="managementHead" alt="Heads"
                        />
                      ),
                    name:"LEBERT MAGLASANG",
                    position: "Supply Chain Head",
                    
                },
                {
                    image: (
                        <img
                          src={accounting}
                          className="managementHead" alt="Heads"
                        />
                      ),
                    name:"ENGR. ARVI VINCENT SUROYSUROY ",
                    position: "Accounting and Finance Head",
                    
                },
                {
                    image: (
                        <img
                          src={safety}
                          className="managementHead" alt="Heads"
                        />
                      ),
                    name:"ENGR. ARVI VINCENT SUROYSUROY ",
                    position: "National Head",
                    
                }                        
                
          ]
        },
  ]
  
const Management = () => {
  return (
    <Con>
        <div className="management">
                <div className="listContainer">
   
             <div className="cardCon1">
             {managementHead[0].list.map((item,i )=>{
      return( 
      <div className="cardWrapper1">
        <div className="imgShadow">
          {item.image}
          </div>
          <div className="descWrap">
          <h3>{item.name}</h3>
          <h3>{item.position}</h3>
          </div>
          </div>
        

     )
    })}
             </div>
  
  <div className="cardCon"> 
   {managementHead[1].list.map((item,i )=>{
return( 
<div className="cardWrapper2">
<div className="imgShadow">
 {item.image}
 </div>
 <div className="descWrap">
 <h3>{item.name}</h3>
 <h3>{item.position}</h3>
 </div>
 </div>


)
})}
</div>
   
        </div>   
        </div>
    </Con>
  )
}

const Con = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
    & .management{
width: 90%;
margin: auto;

display: flex;
justify-content: center;
align-items: center;
      & .listContainer{
        display:flex;
        width: 90%;
        margin: auto;
        justify-content: center;
        align-items: center;
       & .cardCon1{
        display: flex;
      flex-wrap: wrap;
      width: 80%;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 30%;
      justify-content: center;
      align-items: center;
      margin: auto;
        & .cardWrapper1{
          width: 100%;
          display: flex;
         flex-direction: column;
         justify-content: center;
        align-items: center;
       
          & .imgShadow{
            background-color: #FCCC0C;
            border-radius: 100%;
            margin: auto;
            display: flex;
            justify-content: center;
             width: 180px;
             height: 180px;
            .managementImg{
            border-radius: 100%;
           justify-content: center;
           margin: auto;
           width: 80%;
          }
          }
          .descWrap{
       margin: auto;
       justify-content: center;
       & h3{
        box-sizing: border-box;
        text-align: center;
        color: black;
        font-size: 12px;
        font-weight: 900;
       }
         }
        }
       }
     & .cardCon{
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      justify-content: center;
      align-items: center;
      margin: auto;
      & .cardWrapper2{
         width: 300px; 
         justify-content: center;
        align-items: center;
        & .imgShadow{
          background-color: #FCCC0C;
            border-radius: 100%;
            margin: auto;
            display: flex;
            justify-content: center;
             width: 120px;
             height: 120px;
          .managementHead{
           border-radius: 100%;
           justify-content: center;
           margin: auto;
           width: 80%;
         }
        }
         .descWrap{
       margin: auto;
       justify-content: center;
       & h3{
        box-sizing: border-box;
        text-align: center;
        color: black;
        font-size: 12px;
        font-weight: 900;
       }
         }
       }
     }
      }
    }
`
export default Management
