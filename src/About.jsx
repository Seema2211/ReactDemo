import React from 'react'
import Common from './Common'
import Img from './images/about.png'

const About = () =>{
    return(
       <Common name="Welcome to About page" imgsrc={Img} visit="/contact" btnname="Contact Now"></Common>
    )
}

export default About;
