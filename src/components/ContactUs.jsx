import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import image3 from '../assets/ContactPics/image3.png'
const ContactUs = () => {
  return (
    <Con>
       <section className='mySection'>
       <img className='cBG' src={image3} alt="dvds" />
        <div className="container">
            <div className="contactInfo">
                <div>
                    <h2>Contact Info</h2>
                    <div className="contact-widget">
                            <div className="contact-widget-item">
                                <div className="icon">
                                <FontAwesomeIcon className='i' icon={faLocationDot} />
                                </div>
                                <div className="text">
                                    <h5>Address</h5>
                                    <p>PMI Tower Corner, Pablo Ocampo Sr Ext Onyx &, Cabanillas, Makati, 1203 Metro Manila</p>
                                </div>
                            </div>
                            <div className="contact-widget-item">
                                <div className="icon">
                                <FontAwesomeIcon className='i' icon={faPhone} />
                                </div>
                                <div className="text">
                                    <h5>Website</h5>
                                    <p>contact@megashipbuilders.com</p>
                                </div>
                            </div>
                            <div className="contact-widget-item">
                                <div className="icon">
                                <FontAwesomeIcon className='i' icon={faEnvelope} />
                                </div>
                                <div className="text">
                                    <h5>Call Us</h5>
                                    <p>(+02) 8641-2188</p>
                                </div>
                            </div>
                        </div>
                        <div className="map-column">
                        <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.563600368614!2d121.00879887439905!3d14.56693058591547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9845f69b05f%3A0x6ddfb27268e26969!2sPMI%20Tower!5e0!3m2!1sen!2sph!4v1673394905187!5m2!1sen!2sph" 
                        width="370" 
                        height="281.5" 
                        style={{border:0}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                            
                        </iframe>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="contactForm">
            <h2>Get in Touch With Us</h2>
           <div className="contact-form">
           <form action="#">
                                <input type="text" placeholder='Name' required/>
                                <input type="email" placeholder='email'/>
                                <textarea placeholder='Comment'></textarea>
                                <button type='submit' className='site-btn'>Send Message</button>
                            </form>
           </div>
            </div>
        </div>
        </section> 
    </Con>
  )
}
const Con = styled.div`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: sans-serif;
}
.mySection{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
}
.cBG{
    position: absolute;
    height:100%; 
    width: 90%;
}
/* .mySection::before{
    content: '';
    position: absolute;
    left: 5%; 
    width: 46%; 
    height:100%; 
    background: #fff38e;
} */
.container{
    position: relative;
    min-width: 1100px;
    min-height: 650px;
    display:flex;
    z-index: 1000;
    
}
.container .contactInfo{
    position: absolute;
    top:40px;
    width: 350px;
    height: calc(100% - 80px);
    background:#095a55;
    z-index: 1;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}
.container .contactInfo h2{
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-top:20px ;
    margin-left: 30px;
}
.container .contactInfo .contact-widget{
    position: relative;
    margin: 20px 20px;
}
.contact-widget-item{
    position: relative;
    display: flex;
   ;
    cursor: pointer;
    align-items: flex-start;
}
.icon{
    width: 30px;
    min-width: 30px;
    filter: invert(1);
}
.text{
    color: #fff;
    margin-left: 10px;
    font-weight: 300;
    font-size: 12px;
}
.i{
    max-width: 100%;
}
.map-column{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container .contactForm{
    position: absolute;
    padding: 70px 40px;
    padding-left: 250px;
    margin-left: 150px;
    width: calc(100% - 150px);
    height: 100%;
    background: rgba(246, 155, 41, 0.8);
    box-shadow :0 50px 50px rgba(0,0,0,0.25) ;

}
.container .contactForm h2{
    font-size: 24px;
    color: black;
    
}
.contact-form{
    padding:50px;
}
.form{
    display: block;
    margin-top:0em;
}
form input{
        height: 50px;
        width: 100%;
        padding-left: 20px;
        font-size: 15px;
        color: #111;
        border: 1px solid #e1e1e1;
        margin-bottom: 50px;
        border-radius: 4px;
        transition: all, .3s;
}
form textarea{
        height: 130px;
        width: 100%;
        padding-left: 20px;
        padding-top: 12px;
        font-size: 15px;
        color: #111;
        border: 1px solid #e1e1e1;
        resize: none;
        margin-bottom: 9px;
        border-radius: 4px;
        transition: all, .3s;
}
form button{
        width: 50%;
        cursor: pointer;
        
        margin-top: 50px;
}
.site-btn{
        border:none;
        display: inline-block;
        background: rgba(255,215,35,.3);
        color: #111;
        font-size: 14px;
        font-family: sans-serif;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        border-radius: 50px;
        padding: 12px 40px 10px;
       
}
.map-column{
        flex: 0 0 auto;
        width: 100%;
        
}
.contact-map iframe{
    width: 100%;
}
@media (max-width:1200px)
{
    .container{
        width: 90%;
        min-width: auto;
        margin: 20px;
    }
    
    .container .contactInfo{
    top: 0;
    height: 650px;
    position: relative;
    box-shadow: none;
    width: 40%;
}

.container .contactForm{
    
    position: relative;
    width: calc(100% - 250px);
    padding-left: 0px;
    margin-left:0px;
    padding:40px;
    height: 650px;
    box-shadow: none;
}
    .map-column .contact-map iframe{
        height:330px!important;
        padding: 1px;
    }
}
@media (max-width:991px)
{
.mySection{
   .cBG{
    display: none;
   }
}
.container{
    display: flex;
    flex-direction: column-reverse;
    
}
.container .contactForm{
    width: 100%;
    height: auto;
  
    height: 650px;
    padding: 70px 10px;
    
}
.container .contactInfo{
    width: 100%;
   
    
}
.map-column .contact-map iframe{
        height:380px!important;
        width: 100%;
       margin: auto;
    }
}
@media (max-width:600px)
{
    .map-column .contact-map iframe{
        height:350px!important;
        width: 100%;
       margin: auto;

}
}
`
export default ContactUs