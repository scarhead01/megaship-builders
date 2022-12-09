import React from 'react'
import styled from 'styled-components'



const MainContent = () => {
  return (
   <Con>
    <div className="message">
      <h1>MEGASHIP BUILDERS INC</h1>
      <h2>BUILD SHIPS WITH PREMIUM QUALITY 
AND INNOVATIVE DESIGN
</h2>

    </div>
   </Con>
  )
}

const Con=styled.div`
& .message{
  & h1{
    font-family: 'Nunito';
font-weight: 700;
font-size: 96px;
line-height: 131px;
text-align: center;
  }
  & h2{
  font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 49px;
text-align: center;
color: #FFDC84;
  }
}
  
`
export default MainContent
