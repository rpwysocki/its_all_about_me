// Welcome Page
import React from "react";
import selfie from '../assets/images/selfie.jpg'
import underwater from '../assets/images/underwater.jpg'

const Welcome = () => {
  return (

    <div>
      <div style={{
        backgroundImage: `url(${underwater})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}>
        <h1 className="text-center white">
          Welcome to my portfolio.  Please take a look around and learn a little about me, what I have done, and how I work.</h1>
        <div className="selfie">
          <img src={selfie} width="250" height="400" />
        </div>
      </div>
    </div>

  );
};

export default Welcome;