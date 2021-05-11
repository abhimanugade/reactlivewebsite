import React from 'react';
import web from '../src/images/img3.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About=()=> {
  return (
    <>
     <Common 
     name=' Welcome To About ' 
     imgsrc={web} 
     visit="/contact"
     btname="Contact Now"/>

    </>
  );
}
export default About;
