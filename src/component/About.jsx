import React from 'react'
import { useState,useEffect } from 'react';
import './about.css';
const About = () => {
    const [name, setName] = useState('');
    useEffect(() => {
      const storedName = localStorage.getItem('name');
      if (storedName) {
        setName(storedName);
      }
    }, []);
    return (
      <div className='bg'>
       
        <div className="flex-container">
  <div>Welcome, {name}</div>
  <div>Visited</div>
  
</div>
      </div>
    );
  }

export default About
