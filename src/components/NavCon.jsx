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
      <ul className="nav-links">
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Contact Us</li>
      <li>Client</li>
    </ul>
    </nav>
   </div>
    </Con>
  )
}

const Con =styled.div`
& .headers{
width: 100%;
display: inline-flex;
justify-content: space-between;
& img{
  height: 100px;
  width:200px;
}
& nav{
  display:flex;
  justify-content: space-around;
  min-height: 10vh;
  align-items: center;
  margin-right: 100px;
  width:30%;
  .nav-links{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
}
}

`
export default NavCon
