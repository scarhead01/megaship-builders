import React from 'react'
import styled from 'styled-components'

const NavCon = () => {
  return (
    <Con>
   <div className='headers'>
   <img
              src="https://premiummegastructures.com/wp-content/uploads/2022/05/viber_image_2022-05-24_18-05-35-594.png"
              alt="logo"
            />
    <nav>
      <a href ="/#">Home</a>
      <a href ="/#">About Us</a>
      <a href ="/#">Services</a>
      <a href ="/#">Contact Us</a>
      <a href ="/#">Client</a>
    </nav>
   </div>
    </Con>
  )
}

const Con =styled.div`
width:100%;
& .headers{
width: 100%;
display: inline-flex;
justify-content: space-between;
& img{
  height: 100px;
  width:200px;
  display: flex;
}
& nav{
  display:flex;
  align-items: center;
  margin-right: 100px;
  & a{
   padding:5px;
   color: white;
  }
}
}

`
export default NavCon
