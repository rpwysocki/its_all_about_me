// AboutMe.js
import React from 'react';
import underwater1 from '../assets/images/underwater1.jpg'

const AboutMe = () => {
  return (
    <div style={{
      backgroundImage: `url(${underwater1})`, backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh'
    }}>
      <div>
        <h3 className='about'>
          I am an adventurer. I have lived the life I wanted to live. I have traveled and experienced the world.  Up until now I have always had physical, outdoors type careers.  As I settle down, I am looking to grow in something I did in the past. I went to school for web development and business programming in 2001, my resume was out shadowed by misplaced experience after the 9/11 attacks.
        </h3>
      </div>
      <div>
        <h3 className='about'>
          These days I am a husband and father, a homeowner and part of a community. I am looking to make a career change to stay where I am and grow as an employee. As a recent Fullstack Bootcamp graduate I am ready to hit the ground running. As a class we went through a rigorous 12 week course and learned multiple facets of web development. With the pace of the course and the amount of knowledge that had to be retained it definitely speaks volumes to any one graduates capabilities.  I am ready and seeking an entry level position to build on what I have learned and grow as a Fullstack Developer.
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;